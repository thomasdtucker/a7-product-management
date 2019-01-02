#!/usr/bin/env bash

set -x
set -e

BRANCH=$1
BUILD=$2

if [ "$BRANCH" == 'master' ]; then

    # Deploy to staging
    bucket_name="admin.rac-stg.com"
    yarn config set s3bucket s3://$bucket_name
    yarn build:ci:prod
    aws s3 sync --delete ./dist/rac-web-admin `yarn config get s3bucket`
    
    # Deploy to production
    bucket_name="admin.silvercar.com"
    yarn config set s3bucket s3://$bucket_name
    yarn build:ci:prod
    aws s3 sync --delete ./dist/rac-web-admin `yarn config get s3bucket`
elif [ "$BRANCH" == 'develop' ]; then
    bucket_name="admin.rac-tst.com"
    yarn config set s3bucket s3://$bucket_name
    yarn build:ci:qa
    aws s3 sync --delete ./dist/rac-web-admin `yarn config get s3bucket`
else
    bucket_name=$(.circleci/bucket_name.sh ${BRANCH})
    yarn config set s3bucket s3://$bucket_name
    manage-buckets create-web-bucket --bucketname $bucket_name --grantwrite rac-admin-ci --cname $bucket_name --dns-provider "route53" --tld "rac-tst.com" --cloudfront-template ".circleci/cloudfront_template.qa.json" --tag-file ".circleci/tags.txt"
    yarn build:ci:qa
    aws s3 sync --delete ./dist/rac-web-admin `yarn config get s3bucket`
fi

manage-buckets clear-cache --bucketname $bucket_name

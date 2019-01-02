#!/usr/bin/env bash

branch=$1
prefix='rac-admin-ci-'
suffix='.rac-tst.com'
limit=$((64-${#prefix}-${#suffix}-1))
branch="$(echo "${branch,,}" | sed -e "s/[\/.]/-/g" | cut -c 1-$limit)"
bucket_name=${prefix}${branch}${suffix}
echo $bucket_name
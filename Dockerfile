FROM node:9.4.0

WORKDIR /rac-web-admin

COPY package.json package-lock.json /rac-web-admin/
RUN npm update
RUN npm install -g @angular/cli@6.1.3
RUN npm install

COPY . /rac-web-admin
RUN ng build
ENTRYPOINT ["/bin/bash", "entrypoint.sh"]
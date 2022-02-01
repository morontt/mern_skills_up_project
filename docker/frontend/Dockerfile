FROM node:16.13.0

WORKDIR /usr/src/app/

COPY frontend/package.json /usr/src/app/
COPY frontend/package-lock.json /usr/src/app/

RUN npm i -g sass \
    webpack webpack-cli \
    webpack-dev-server \
    html-webpack-plugin

RUN su node \
  && npm i

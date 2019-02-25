FROM node:10.15.0-alpine AS build-stage
WORKDIR /usr/client
COPY package*.json /usr/client/

RUN npm install --silent
COPY . /usr/client
RUN npm run build

FROM nginx:1.15.8-alpine 
COPY --from=build-stage /usr/client/public /usr/share/nginx/html

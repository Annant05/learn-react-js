FROM node:12-alpine3.10

WORKDIR /usr/src/app/my-app
COPY ./my-app/package*.json ./
RUN npm install -g parcel-bundler
RUN npm install --silent

RUN apk add util-linux

EXPOSE 3000
CMD ["npm", "start"]

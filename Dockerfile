FROM node:12-alpine3.10

WORKDIR /usr/src/app/my-app
COPY ./my-app/package*.json ./
RUN npm install

RUN apk add util-linux

EXPOSE 1234
CMD ["npm", "start"]

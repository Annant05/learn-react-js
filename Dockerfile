FROM node:14.17.0-alpine3.10

WORKDIR /usr/src/app/my-app
COPY ./my-app/package*.json ./
RUN npm install --silent

EXPOSE 3000
CMD ["npm", "start"]

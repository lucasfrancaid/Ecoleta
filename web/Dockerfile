FROM node:lts-alpine

WORKDIR /usr/app

ADD package*.json ./
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
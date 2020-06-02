FROM node:lts-alpine

WORKDIR /usr/app

ADD package*.json ./
RUN npm install

EXPOSE 3333

CMD ["npm", "run", "dev"]
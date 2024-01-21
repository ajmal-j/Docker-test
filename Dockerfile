FROM node:slim

WORKDIR /node

COPY . /app

RUN npm install

EXPOSE 3000

CMD [ "npm","start" ]
FROM node:8.15.0-alpine
WORKDIR /usr/src/app

RUN npm install pm2 -g

COPY . /usr/src/app

RUN npm install

EXPOSE 3000
CMD [ "pm2-runtime", " start app.js --watch" ]
FROM node:9.11.1

COPY package-lock.json ./

COPY package.json . /

WORKDIR .

EXPOSE 6060

RUN npm install

CMD npm start

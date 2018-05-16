FROM node:9.11.1

COPY microservices /microservices

WORKDIR /microservices

EXPOSE 6060

RUN npm install

CMD npm start

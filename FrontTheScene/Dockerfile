FROM node:18 AS builder

WORKDIR /Frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
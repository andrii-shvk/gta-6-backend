FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./certs/us-east-2-bundle.pem /app/certs/us-east-2-bundle.pem

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
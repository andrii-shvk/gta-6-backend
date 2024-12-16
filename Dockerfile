FROM node:18

WORKDIR /app

COPY package*.json ./
COPY ./certs/us-east-2-bundle.pem /app/certs/us-east-2-bundle.pem

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
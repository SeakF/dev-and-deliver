FROM node:18.18.0-alpine

WORKDIR /app

COPY package*.json ./
COPY .env ./
COPY tsconfig.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4002

EXPOSE 4002

CMD ["npm", "start"]
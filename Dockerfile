FROM node:18-alpine

WORKDIR /app

COPY . .

COPY package.json .

RUN yarn install

EXPOSE 3001

CMD ["yarn", "dev"]

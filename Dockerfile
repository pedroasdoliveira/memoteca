FROM node AS Development

WORKDIR /usr/src

COPY package*.json .

RUN npm install

COPY . .

CMD ["sh", "-c", "npm start"]
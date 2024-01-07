FROM docker.io/library/node:14.21.3
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm install
WORKDIR /app
RUN npm run build

#Dockerfile para Angular
FROM node:10-alpine
RUN mkdir -p /app/dist/angular
WORKDIR /app/
COPY /package*.json /app/
RUN cd /app/
RUN npm install
COPY / /app/
RUN npm run build --prod

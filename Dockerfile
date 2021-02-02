#Dockerfile para Angular
FROM node:10-alpine
RUN mkdir -p /app/dist/angular
WORKDIR /app/
COPY ./package*.json /app/
RUN cd /app/
RUN npm install
COPY ./ /app/
RUN npm run build --prod
#NGINX
FROM nginx:1.17.1-alpine
COPY --from=0 /app/dist/angular/ /usr/share/nginx/html
FROM node:latest as node

ARG ENV=prod
ARG APP=concerts-front

ENV ENV ${ENV}
ENV APP ${APP}

WORKDIR /

# Instala y construye el Angular App
RUN npm install
RUN npm run build --prod

# Angular app construida, la vamos a hostear un server production, este es Nginx

FROM nginx:1.13.8-alpine

COPY --from=node /app/dist/${APP}/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

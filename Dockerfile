FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*
COPY ./dist/metatube /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

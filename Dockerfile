FROM nginx:latest

COPY ./dist/metatube /var/www/html
#COPY ./build/conf /etc/nginx/conf.d


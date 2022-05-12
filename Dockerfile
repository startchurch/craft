FROM craftcms/php-fpm:8.0-dev

RUN composer create-project craftcms/craft 
EXPOSE 80 3306


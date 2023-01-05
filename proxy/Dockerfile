FROM node:16

# Create app directory
WORKDIR /var/www

RUN npm install -g supervisor
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8000
CMD [ "npm", "run", "watchserver" ]

# Dockerfile
FROM node:14-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# install yalc globally
RUN npm install -g yalc

# Publish storybook in private (local machine)
COPY ./storybook /usr/src/nuxt-app/storybook
WORKDIR /usr/src/nuxt-app/storybook
RUN yalc publish --private

# Install dependencies in /storybook directory
RUN npm install

# Install dependencies in /app directory
COPY ./app /usr/src/nuxt-app/app
WORKDIR /usr/src/nuxt-app/app
RUN npm install

# Add storybook to /app directory
RUN yalc add storybook

# Run app server

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

RUN npm run generate

CMD ["npm", "start"]

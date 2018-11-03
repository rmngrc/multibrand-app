FROM node:latest

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# Running the app as a non root user
RUN groupadd -r nodejs && useradd -m -r -g nodejs -s /bin/bash nodejs
RUN chown nodejs:nodejs /usr/src/app/
USER nodejs:nodejs

# Installing npm dependencies
COPY --chown=nodejs:nodejs package*.json /usr/src/app/
RUN npm install

EXPOSE 8080
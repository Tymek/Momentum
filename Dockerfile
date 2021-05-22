FROM node:16-alpine

COPY . /srv
WORKDIR /srv

RUN yarn install --production

CMD "yarn" "start"

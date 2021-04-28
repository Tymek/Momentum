FROM node:16

COPY ./package.json /srv/
COPY ./web-build /srv/web-server/
COPY ./web-server /srv/web-build/

WORKDIR /srv

RUN yarn install --production

CMD ["yarn", "serve"]

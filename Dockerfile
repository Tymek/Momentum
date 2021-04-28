FROM node:16

COPY ./package.json /srv/
COPY ./yarn.lock /srv/
COPY ./web-build /srv/web-build/
COPY ./web-server /srv/web-server/

WORKDIR /srv

RUN yarn install --production --frozen-lockfile

CMD ["yarn", "serve"]

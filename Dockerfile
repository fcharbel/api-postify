FROM node:20 as base

WORKDIR /API-POSTIFY

COPY package*.json /API-POSTIFY

RUN npm i

COPY . /API-POSTIFY

FROM base as production

CMD ["npm", "start"]

EXPOSE 3000

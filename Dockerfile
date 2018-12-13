FROM node:6-slim

ENV HOME=/home/app
COPY package.json $HOME/automationtests/

WORKDIR $HOME/automationtests

ARG npm

RUN npm set registry ${npm:-https://registry.npmjs.org/} && \
		npm set ca null && \
		npm install

COPY . $HOME/automationtests

CMD [ "npm", "start" ]

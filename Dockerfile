FROM node:9.10.0

RUN npm install --global yarn
COPY public/ /app/public/
COPY src/ /app/src/
COPY .babelrc .env index.js package.json webpack.config.js webpack.server.config.js yarn.lock /app/
WORKDIR /app
RUN ls -la
RUN npm rebuild node-sass
RUN yarn install
RUN yarn build
EXPOSE 8080
ENV NODE_ENV production
ENV APP_URL http://localhost:8080
ENTRYPOINT node dist/server.js

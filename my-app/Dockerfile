FROM node:lts-alpine as build

WORKDIR /app
COPY package*.json /app/
ENV NODE_ENV production
RUN npm ci --omit=dev
COPY ./ /app/
RUN npm run build
# TODO: run tests?

FROM nginx:stable-alpine
COPY --from=build /app/build/ /usr/share/nginx/html

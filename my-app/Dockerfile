FROM node:11.10.0-alpine as build

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:1.15.8-alpine
COPY --from=build /app/build/ /usr/share/nginx/html

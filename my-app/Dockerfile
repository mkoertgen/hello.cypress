FROM node:13.12.0-alpine3.11 as build

WORKDIR /app
COPY package*.json /app/
ENV NODE_ENV production
RUN npm ci --only=production
COPY ./ /app/
RUN npm run build

FROM nginx:1.17.9-alpine
COPY --from=build /app/build/ /usr/share/nginx/html

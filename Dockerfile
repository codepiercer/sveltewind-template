FROM node:18-alpine AS build

ARG VCS_REF
LABEL org.label-schema.vcs-ref=$VCS_REF

# install git
RUN apk add --no-cache git

# install dependencies
WORKDIR /app
COPY package.json ./
RUN npm i

# Copy all local files into the image.
COPY . .

# Build the dependencies
RUN cp .env.example .env
RUN npm run build
RUN rm -rf node_modules
RUN npm install --omit=dev

# Copy the build output to the image
FROM node:18-alpine

COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/
COPY --from=build /app/build/ /app/

WORKDIR /app

EXPOSE 3000

CMD ["node", "index.js"]

FROM node:12

# Installing dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

# Copying source files
COPY . .

# Building app
RUN yarn build

EXPOSE 80

# Running the app
CMD yarn start -p 80

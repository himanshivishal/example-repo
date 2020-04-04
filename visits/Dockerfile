# from base image
FROM node:alpine
WORKDIR '/usr/app'
# add commands
COPY package.json .
RUN npm install
COPY . .

# add the start command
CMD ["npm","start"]
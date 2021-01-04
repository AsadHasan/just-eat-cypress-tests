FROM cypress/browsers:node12.18.3-chrome87-ff82
WORKDIR /usr/src/app
COPY . .
ENTRYPOINT ["npm", "install", "--only=prod"]

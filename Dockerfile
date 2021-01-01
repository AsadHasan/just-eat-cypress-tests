FROM cypress/browsers:node12.18.3-chrome87-ff82
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --only=prod
COPY . .
CMD ["npm", "run", "test-and-report"]

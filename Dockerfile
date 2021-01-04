FROM cypress/browsers:node12.18.3-chrome87-ff82
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=prod
ENTRYPOINT ["npm", "run", "test-and-report"]

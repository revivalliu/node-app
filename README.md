# This coffeeshop shopping cart Node.js app is for the demo of the CI/CD pipeline with Jenkins on AWS.

### Run the application locally
You need [Node](https://nodejs.org/en/download/), [NPM](https://www.npmjs.com/get-npm) (which is bundled with Node) and [MongoDB](https://docs.mongodb.com/manual/installation/#mongodb-community-edition) properly installed before being able to run this application.

To get started:
1. Clone this repository
``` shell
    git clone https://github.com/revivalliu/node-app.git
```

2. Install dependencies
``` shell
    npm install
```

3. Start up MongoDB
``` shell
    mongod
```

4. Populate shopping database
``` shell
    node seed/product-seeder.js
```
Once the project is setup, start the dev server with Nodemon.
``` shell
    npm run dev
```
Server will start at: http://localhost:3000

### 



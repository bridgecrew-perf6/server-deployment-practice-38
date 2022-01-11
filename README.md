# server-deployment-practice

https://teamscottie-lease.invisionapp.com/freehand/server-deployment-practice-kbYRmJoCe

HTTP server deployed on Heroku: https://scott-server-deploy-prod.herokuapp.com/

PR to dev branch: https://github.com/scottie-l/server-deployment-practice/pull/1

Deployment URL to prod: https://scott-server-deploy-prod.herokuapp.com/

### Installation:
to install run: `git clone git@github.com:scottie-l/server-deployment-practice.git`

cd into `server-deployment-practice`

run `npm install`

### Usage:
To start server run : `npm start`

To test server run: `npm test`

### Routes:
GET /message: returns a list of Message objects
POST /message: creates a message, and saves it and then returns the list of messages.

### Features:
Message:
Contains String: Text
Contains String: Author
Messages can be saves
Full list of messages read.

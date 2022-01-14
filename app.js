'use strict';

const express = require('express');
// const req = require('express/lib/request');

// express returns a singleton pattern(returns an object that can be modified)
const app = express();

const messages = [];
class Message {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

// needs 2 things: a route(string) and a Callback function - tells the route to do, using 2 params: req and res
// this method function modifies our singleton
app.get('/message', (req, res) => { // create a message and send it back
  console.log('Someone sent a request! ' + req.method);
  res.send('here is a messages');
}); 

function createMessage(req, res, next) {
  const messageText = req.query.text;
  const authorName = req.query.author;
  console.log('First message is created');
  if (!messageText || authorName {
    next('No text or Author');
  } else {
    const message = new Message(messageText, authorName);
    // we modify,
    req.message = message;
    next();
  }
 }

function saveMessage(req, res, next) {
  console.log('Can see any data htat was added to the request', req.message);
  let message = req.message;
  messages.push(message);
  next();
}

// POST http://localhost:300/message?text=someString&author=Jacob
app.post('/message', createMessage, saveMessage, (req, res, next) => {
// create a message and send it back?
  res.send(messages);
});

//   const messageText = req.query.text;
//   const authorName = req.query.author;

//   next('an error has occured'); //error handling for server
//   const message = new Message(messageText, authorName);
//   MessageChannel.push(message);
//   res.send(messages);
// });

app.use(function (err, req, res, next) {
  console.log(err);
  res.send('Error Handler hit!');
});

// only runs when no other functio can from handlers above
app.use(function (req, res) {
  res.status(404).send('Nothing Found');
});

module.exports = {
  start: function (port) {
    app.listen(port, () => {
      console.log('App is running on: ' + port);
    });
  },
  app,
};
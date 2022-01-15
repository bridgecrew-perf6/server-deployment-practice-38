'use strict';

const express = require('express');
const req = require('express/lib/request');

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
app.get('/message', (req, res) => {
// create a message and send it back
  console.log('Someone sent a request! ' + req.method);
  res.send(messages);
}); // this method function modifies our singleton

function createMessage(req, res, next) {
  const messageText = req.query.text;
  const authorName = req.query.author;
  const message = new Message(messageText, authorName);
  // we modify
  req.message = message;
  next();
}

function saveMessage(req, res, next) {
  let message = req.message;
  messages.push(message);
  next();
}

// POST http://localhost:3000/message?text=someString&author=Name
app.post('/message', createMessage, saveMessage, (req, res, next) => {
  res.send(messages);
});

app.use(function (err, req, res, next) {
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
'use strict';

const server = require('../app.js');
const supertest = require('supertest');
// const require = supertest(server.app);

describe('Testing my HTTP server', () => {

  it('Should be able to reponsd to a POST to /message', async () => {
    let res = await req.post('/message?text=test&author=test');

    expect(res.status).toEqual(200);
    console.log(res.body);
    expect(res.body[0].text).toEqual('test');
  });
});


// a small change
require('dotenv').config();
// const { query } = require('express');
const supertest = require("supertest");
const environmentURL = process.env.HOST;
const request = supertest(environmentURL);

exports.getResponse = query => {
  return request.post('/graphql').send(query);
};

exports.getResponseWithAuthToken = (token, query) => {
  return request.post('/graphql').set({
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }).send(query);
};

// exports.getResponseWithToken = query => {
//     let res = await request.post("").send(loginQueries.verifyAccount("kavit.gamot+la@castingnetworks.com", "P@ssw0rd"));

// };
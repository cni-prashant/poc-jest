import * as dotenv from 'dotenv';
import * as supertest from 'supertest';

dotenv.config();
const environmentURL = process.env.HOST;
const request = supertest(environmentURL);

export function getResponse(query) {
  return request.post('/graphql').send(query);
}

export function getResponseWithAuthToken(token: string, query) {
  return request
    .post('/graphql')
    .set({
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    })
    .send(query);
}

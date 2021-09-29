import * as login from '../graphql/queries/generic';
import * as helpers from '../helpers';
import { cred } from '../config/credentials';
import { GraphQLClient } from 'graphql-request';
// import * as supertest from 'supertest';
// const environmentURL = process.env.HOST;
// const request = supertest(environmentURL);
import * as dotenv from 'dotenv';
import { getSdk } from '../src/graphql/graphql';
const result: any = dotenv.config().parsed;

describe('Casting Director, login', () => {
  test('Login with valid credentials', async () => {
    let res;
    const client = new GraphQLClient(result.GRAPHQL_URL);
    const sdk = getSdk(client);
    console.log('sdk is ', sdk.verifyAccount);
    // res = await client.request(sdk, {input: {name: cred.cdUser, password: cred.password}});
    // try {
    //   res = await client.request(VerifyAccount, {input: {name: cred.cdUser, password: cred.password}});
    // } catch (error) {
    //   console.error(JSON.stringify(error, undefined, 2))
    //   process.exit(1)
    // }
    // console.log("res is ", res.verifyAccount.token.access);
    // const res = await helpers.getResponse(
    //   login.verifyAccount(cred.cdUser, cred.password),
    // );

    // expect(res.status).toBe(200);
    // expect(res.body.data.verifyAccount.token.access).not.toBe(null);
  });

  // test('Login with invalid credentials', async () => {
  //   const res = await helpers.getResponse(
  //     login.verifyAccount(cred.invalidCDUser, cred.password),
  //   );

  //   expect(res.status).toBe(200);
  //   expect(res.body.errors[0].message).toBe(
  //     "We couldn't find an account associated with that email or username.",
  //   );
  // });
});

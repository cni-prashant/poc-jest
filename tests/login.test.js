const login = require('../graphql/queries/generic');
let helpers = require('../helpers');
const cred = require("../config/credentials.json");
const general = require('../graphql/mutations/general');
require('dotenv').config();

test('login into CD with valid credentials', async () => {
    //login into account
    let res = await helpers.getResponse(login.verifyAccount(cred.cdUser, cred.password));
    expect(res.status).toBe(200); 
    expect(res.body.data.verifyAccount.token.access).not.toBe(null);
});

test('login into CD with invalid credentials', async () => {
  //login into account
  let res = await helpers.getResponse(login.verifyAccount(cred.invalidCDUser, cred.password));
  expect(res.status).toBe(200);
  expect(res.body.errors[0].message).toBe("We couldn't find an account associated with that email or username.");
});
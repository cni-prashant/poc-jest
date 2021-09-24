const login = require('../graphql/queries/generic');
let helpers = require('../helpers');
const cred = require("../config/credentials.json");
const generic = require('../graphql/queries/generic');
require('dotenv').config();

test('verify basic filters functionality', async () => {
  //login into account
  let res = await helpers.getResponse(login.verifyAccount(cred.cdUser, cred.password));
  expect(res.status).toBe(200);
  expect(res.body.data.verifyAccount.token.access).not.toBe(null);
  let accessToken = res.body.data.verifyAccount.token.access;

  //Grab Organization Id
  res = await helpers.getResponseWithAuthToken(accessToken, generic.myAccount());
  expect(res.status).toBe(200);
  expect(res.body.data.myAccount.id).not.toBe(null);


  // //Parameters for switch Auth context
  // let input = {};
  // res = await helpers.getResponseWithAuthToken(accessToken, general.switchAuthContext())
});
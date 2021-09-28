import * as login from '../graphql/queries/generic';
import * as helpers from '../helpers';
import { cred } from '../config/credentials';

describe('Casting Director, login', () => {
  test('Login with valid credentials', async () => {
    const res = await helpers.getResponse(
      login.verifyAccount(cred.cdUser, cred.password),
    );

    expect(res.status).toBe(200);
    expect(res.body.data.verifyAccount.token.access).not.toBe(null);
  });

  test('Login with invalid credentials', async () => {
    const res = await helpers.getResponse(
      login.verifyAccount(cred.invalidCDUser, cred.password),
    );

    expect(res.status).toBe(200);
    expect(res.body.errors[0].message).toBe(
      "We couldn't find an account associated with that email or username.",
    );
  });
});

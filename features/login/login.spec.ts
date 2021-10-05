import { verifyLogin } from './login';
import { cred } from '../../config/credentials';

describe('Casting Director, login', () => {
  test('Login with valid credentials', async () => {
    const output = await verifyLogin(cred.cdUser, cred.password);
    expect(output.verifyAccount.token.access).not.toBe(null);
  });

  test('Login with invalid credentials', async () => {
    const output = await verifyLogin(cred.invalidCDUser, cred.password);
    expect(output).toBe(
      "We couldn't find an account associated with that email or username.",
    );
  });
});

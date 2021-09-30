import * as helpers from '../../helpers';

export async function verifyLogin(username: string, password: string) {
  let res;
  res = await helpers.getSdkResponse();
  try {
    res = await res.verifyAccount({ input: { name: username, password: password } });
  } catch (error) {
    return error.response.errors[0].message;
  }
  return res;
}


import login from '../graphql/queries/generic';
import helpers from '../support/helpers';
require('dotenv').config();

export default class Login {

  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  public async verifyAccount(username: string, password: string) {
    let res = await helpers.getResponse(login.verifyAccount(username, password));
    return {
      status: res.status,
      accessToken: res.body.data.verifyAccount.token.access,
      refreshToken: res.body.data.verifyAccount.token.refresh
    };
  }
}
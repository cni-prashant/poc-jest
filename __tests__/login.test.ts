import LoginData from '../features/login'; 
import cred from '../config/credentials';
require('dotenv').config();

// test('login into CD with valid credentials', async () => {
//     //login into account
    
//     let result = await login.verifyAccount(cred.cdUser, cred.password);
//     expect(result.status).toBe(200);
//     expect(result.accessToken).not.toBe(null);
// });

describe('Login Related Test Cases', ()=> {
  let login: LoginData;

  it('should login into CD using valid credentials', async() => {
    let result = await login.verifyAccount(cred.cdUser, cred.password);
    expect(result.status).toBe(200);
    expect(result.accessToken).not.toBe(null);
  });

//   it('should not login into CD using invalid credentials', async() => {
//     let result = await login.verifyAccount(cred.invalidCDUser, cred.password);
//     expect(result.status).toBe(200);
//     expect(result.accessToken).not.toBe(null);
//   });

});
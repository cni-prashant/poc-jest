import * as helpers from '../../helpers';
let res;

export async function myAccount(token) {
  res = await helpers.getSdkResponseWithToken(token);
  try {
    res = await res.myAccount();
  } catch (error) {
    return error;
  }
  return res;
}

export async function switchAuthContext(access, refresh, divisionId) {
  res = await helpers.getSdkResponseWithToken(access);
  try {
    res = await res.switchAuthContext({
      organizationId: divisionId,
      refreshToken: refresh,
    });
  } catch (error) {
    return error;
  }
  return res;
}

export async function searchProfiles(token, searchCriteria) {
  res = await helpers.getSdkResponseWithToken(token);
  try {
    res = await res.SearchProfiles(searchCriteria);
  } catch (error) {
    return error;
  }
  return res;
}

import { verifyLogin } from '../login/login';
import { myAccount, searchProfiles, switchAuthContext } from './basicFilters';
import { cred } from '../../config/credentials';
import * as filters from '../../testData/filters';

describe('Reps, basic filters', () => {
  let loginRes,
    accessToken,
    refreshToken,
    myAccountRes,
    divisionId,
    switchAuthContextRes,
    contextToken;

  beforeAll(async () => {
    //login into Reps
    loginRes = await verifyLogin(cred.repsUser, cred.password);
    expect(loginRes.verifyAccount.token.access).not.toBe(null);
    accessToken = loginRes.verifyAccount.token.access;
    refreshToken = loginRes.verifyAccount.token.refresh;

    //my account
    myAccountRes = await myAccount(accessToken);
    expect(myAccountRes.myAccount.divisions[0].id).not.toBe(null);
    divisionId = myAccountRes.myAccount.divisions[0].id;

    //switch auth context
    switchAuthContextRes = await switchAuthContext(accessToken, refreshToken, divisionId);
    contextToken = switchAuthContextRes.switchAuthContext.access;
  });

  it('search using stage name', async () => {
    //Preparing search criteria payload
    filters.stageNamePayload.input.organizationId = divisionId;

    //actual endpoint call
    const searchProfilesRes = await searchProfiles(
      contextToken,
      filters.stageNamePayload,
    );
    expect(
      searchProfilesRes.searchProfiles.profiles.find(
        (id) => id.stageName === filters.stageNamePayload.input.stageName,
      ),
    ).toBeTrue;
  });

  it('search using gender as man', async () => {
    //preparing search criteria payload
    filters.genderManPayload.input.organizationId = divisionId;

    //actual endpoint call
    const searchProfilesRes = await searchProfiles(
      contextToken,
      filters.genderManPayload,
    );
    searchProfilesRes.searchProfiles.profiles.forEach((element) => {
      expect(
        element.genderAppearances.find(
          (id) => id.code === filters.genderManPayload.input.genderAppearances[0],
        ).code,
      ).toBe(filters.genderManPayload.input.genderAppearances[0]);
    });
  });

  it('search using ethnic appearance as Black', async () => {
    //preparing search criteria payload
    filters.ethnicBlackPayload.input.organizationId = divisionId;

    //actual endpoint call
    const searchProfilesRes = await searchProfiles(
      contextToken,
      filters.ethnicBlackPayload,
    );
    searchProfilesRes.searchProfiles.profiles.forEach((element) => {
      expect(
        element.ethnicAppearances.find(
          (id) => id.code === filters.ethnicBlackPayload.input.ethnicAppearances[0],
        ).code,
      ).toBe(filters.ethnicBlackPayload.input.ethnicAppearances[0]);
    });
  });

  it('search using union status as AEA', async () => {
    //preparing search criteria payload
    filters.unionAEAPayload.input.organizationId = divisionId;

    //actual endpoint call
    const searchProfilesRes = await searchProfiles(contextToken, filters.unionAEAPayload);
    searchProfilesRes.searchProfiles.profiles.forEach((element) => {
      expect(
        element.talentUnions.find(
          (id) => id.code === filters.unionAEAPayload.input.talentUnions[0],
        ).code,
      ).toBe(filters.unionAEAPayload.input.talentUnions[0]);
    });
  });

  it('search a Black Man with AEA union', async () => {
    //preparing search criteria payload
    filters.blackAEAManPayload.input.organizationId = divisionId;

    //actual endpoint call
    const searchProfilesRes = await searchProfiles(
      contextToken,
      filters.blackAEAManPayload,
    );
    searchProfilesRes.searchProfiles.profiles.forEach((element) => {
      expect(
        element.ethnicAppearances.find(
          (id) => id.code === filters.blackAEAManPayload.input.ethnicAppearances[0],
        ).code,
      ).toBe(filters.blackAEAManPayload.input.ethnicAppearances[0]);
      expect(
        element.genderAppearances.find(
          (id) => id.code === filters.blackAEAManPayload.input.genderAppearances[0],
        ).code,
      ).toBe(filters.blackAEAManPayload.input.genderAppearances[0]);
      expect(
        element.talentUnions.find(
          (id) => id.code === filters.blackAEAManPayload.input.talentUnions[0],
        ).code,
      ).toBe(filters.blackAEAManPayload.input.talentUnions[0]);
    });
  });
});

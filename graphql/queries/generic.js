module.exports = {
  verifyAccount: (name, password) => {
    return {
      operationName: 'verifyAccount',
      query: 'query verifyAccount($input: VerifyAccountInput!) {verifyAccount(input: $input)}',
      variables: {
        input: {
          name: name,
          password: password
        }
      }
    };
  },
  myAccount: () => {
    return {
      operationName: 'myAccount',
      query:
        'query myAccount {  myAccount {    id    firstName    lastName    countryId    email    isAdmin    country {      id      code      name      continent {        id        __typename      }      unitSystem {        id        code        __typename      }      __typename    }    artists {      minor      artistId      created      profiles {        profileId        stageName        dateOfBirth        created        isPersonal        isPlayableAgeLockedToTalent        profileStatus {          id          code          name          __typename        }        __typename      }      __typename    }    isIPC    organizations {      id      features {        id        code        name        enabled        __typename      }      __typename    }    divisions {      id      name      logo {        id        fileKey        guid        mediaType {          id          code          __typename        }        mediaStatus {          id          code          __typename        }        __typename      }      isOrganization      parentOrganization {        id        name        logo {          id          fileKey          guid          __typename        }        __typename      }      __typename    }    timeZone {      id      code      standardName      __typename    }    __typename  }}',
      variables: {}
    };
  },
}
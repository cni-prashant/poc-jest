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
switchAuthContext: input => {
  return {
    operationName: 'switchAuthContext',
    query:
      'mutation switchAuthContext($refreshToken: String!, $role: SystemRoleCode, $artistId: Int, $organizationId: Int) {  switchAuthContext(refreshToken: $refreshToken, role: $role, artistId: $artistId, organizationId: $organizationId) {    access    refresh    __typename  }}',
    variables: input
  };
}, 
}
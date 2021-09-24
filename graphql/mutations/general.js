module.exports = {
  switchAuthContext: input => {
    return {
      operationName: 'switchAuthContext',
      query:
        'mutation switchAuthContext($refreshToken: String!, $role: SystemRoleCode, $artistId: Int, $organizationId: Int) {  switchAuthContext(refreshToken: $refreshToken, role: $role, artistId: $artistId, organizationId: $organizationId) {    access    refresh    __typename  }}',
      variables: input
    };
  } 
}
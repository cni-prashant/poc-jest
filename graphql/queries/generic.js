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
}
}
import * as dotenv from 'dotenv';
import { getSdk } from './sdk';
const result: any = dotenv.config().parsed;
import { GraphQLClient } from 'graphql-request';

export async function getSdkResponse() {
  const client = new GraphQLClient(result.GRAPHQL_URL);
  const sdk = getSdk(client);
  return sdk;
}

export async function getSdkResponseWithToken(token) {
  const client = new GraphQLClient(result.GRAPHQL_URL).setHeader(
    'Authorization',
    `Bearer ${token}`,
  );
  const sdk = getSdk(client);
  return sdk;
}

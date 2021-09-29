// import {gql} from '@graphql-codegen/typescript-graphql-request';
import { gql } from 'graphql-request';

export const verifyAccount = gql`
  query verifyAccount($input: VerifyAccountInput!) {
    verifyAccount(input: $input)
  }
`;

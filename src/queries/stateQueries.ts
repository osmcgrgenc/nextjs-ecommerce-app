import { gql } from '@apollo/client';

export const GET_STATES = gql`
  query GET_STATES($countryCode: String!) {
    wooStates(countryCode: $countryCode) {
      states {
        stateCode
        stateName
      }
    }
  }
`;

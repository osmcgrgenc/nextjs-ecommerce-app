import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`query GET_COUNTRIES{
  wooCountries {
    billingCountries {
      countryCode
      countryName
    }
    shippingCountries {
      countryCode
      countryName
    }
  }
}`;

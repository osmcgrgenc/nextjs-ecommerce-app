import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LOGIN_USER($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      authToken
      user {
        id
        username
        email
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation REGISTER_USER($username: String!, $email: String!, $password: String!) {
    registerUser(input: { username: $username, email: $email, password: $password }) {
      user {
        id
        username
        email
      }
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD($username: String!) {
    resetPassword(input: { username: $username }) {
      status
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation LOGOUT_USER {
    logout(input: {}) {
      status
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation UPDATE_CUSTOMER($id: ID!, $firstName: String!, $lastName: String!, $email: String!) {
    updateCustomer(input: { id: $id, firstName: $firstName, lastName: $lastName, email: $email }) {
      customer {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

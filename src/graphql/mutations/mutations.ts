import { gql } from "@apollo/client";

export const USER_SIGNUP = gql`
  mutation Signup($content: UserSignupContent) {
    signup(content: $content) {
      email
      name
      phone
      role
    }
  }
`;

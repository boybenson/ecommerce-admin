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

export const CREATE_PRODUCT = gql`
  mutation Mutation($content: ProductCreateContent) {
    createProduct(content: $content) {
      id
      description
      name
      photo
      price
      qtyInStock
    }
  }
`;

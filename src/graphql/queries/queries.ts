import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($content: GetProductsContent) {
    getProducts(content: $content) {
      description
      id
      name
      photo
      price
      qtyInStock
    }
  }
`;

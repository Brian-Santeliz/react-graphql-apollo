import { gql } from "@apollo/client";
export const GET_BOOKS = gql`
  query getBooks {
    getBooks {
      name
      id
      year
      author
    }
  }
`;

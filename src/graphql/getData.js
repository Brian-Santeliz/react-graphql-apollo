import { gql } from "@apollo/client";
export const getBooks = gql`
  query getBooks {
    getBooks {
      name
      id
      year
      author
    }
  }
`;

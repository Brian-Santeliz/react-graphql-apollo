import { gql } from "@apollo/client";
export const getBookId = gql`
  query getBookById($id: ID!) {
    getBookId(id: $id) {
      name
      year
      author
    }
  }
`;

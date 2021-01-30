import { gql } from "@apollo/client";
export const DELETE_DATA = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      year
      id
      author
      name
    }
  }
`;

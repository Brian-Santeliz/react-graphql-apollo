import { gql } from "@apollo/client";
export const CREATE_BOOK = gql`
  mutation createBook($name: String!, $author: String!, $year: String!) {
    createBook(name: $name, author: $author, year: $year) {
      name
      author
      year
      id
    }
  }
`;

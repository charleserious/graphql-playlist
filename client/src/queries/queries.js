import { gql } from "@apollo/client";

export const AUTHORS = gql`
  query authors {
    authors {
      name
      id
    }
  }
`;

export const BOOKS = gql`
  query books {
    books {
      name
      id
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export const GET_BOOK = gql`
  query Book($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

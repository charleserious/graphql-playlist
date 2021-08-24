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

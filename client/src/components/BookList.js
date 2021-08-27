import { useState } from "react";
import { useQuery } from "@apollo/client";
import { BOOKS } from "../queries/queries";
import { BookDetails } from "./BookDetails";

export const BookList = (props) => {
  const [bookId, setBookId] = useState("");

  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ name, id }) => (
          <li key={id} onClick={(e) => setBookId(id)}>
            {name}
          </li>
        ))}
      </ul>
      {bookId && <BookDetails bookId={bookId}></BookDetails>}
    </div>
  );
};

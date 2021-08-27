import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../queries/queries";

const ERROR = <div>Error :(</div>;

export const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });
  if (loading) return <div>Loading Detail...</div>;
  if (error) return ERROR;
  console.log(data);
  const {
    book: {
      name,
      genre,
      author: { name: authorName, books },
    },
  } = data;
  return (
    <div id="book-details">
      <h2>{name}</h2>
      <p>{genre}</p>
      <p>{authorName}</p>
      <ul className="otherBooks">
        {books.map(({ name, id }) => {
          return <li id={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

import { useQuery } from "@apollo/client";
import { BOOKS } from "../queries/queries";

export const BookList = (props) => {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

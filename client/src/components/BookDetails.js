import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../queries/queries";

export const BookDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });
  if (loading) return <div>Loading Detail...</div>;
  if (error) return <div>Error :(</div>;
  console.log(data);
  return (
    <div id="book-detail">
      <p>Output book detail here</p>
    </div>
  );
};

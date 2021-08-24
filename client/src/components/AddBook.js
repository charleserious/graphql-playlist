import { useQuery, gql } from "@apollo/client";

const AUTHORS = gql`
  query authors {
    authors {
      name
      id
    }
  }
`;

export const AddBook = (props) => {
  const { loading, error, data } = useQuery(AUTHORS);

  if (loading) return <div>Loading Authors...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <form id="add-book">
      <div className="field">
        <label htmlFor="bookName">Book name:</label>
        <input id="bookName" type="text" />
      </div>

      <div className="field">
        <label htmlFor="genre">Genre:</label>
        <input id="genre" type="text" />
      </div>

      <div className="field">
        <label htmlFor="author">Author:</label>
        <select id="author">
          <option>Select author</option>
          {data.authors.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

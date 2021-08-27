import { useQuery, useMutation } from "@apollo/client";
import { AUTHORS, BOOKS, ADD_BOOK } from "../queries/queries";
import { useState } from "react";

const INITIAL_BOOK = { name: "", genre: "", authorId: "" };

export const AddBook = (props) => {
  const { loading, error, data } = useQuery(AUTHORS);
  const [saveBook] = useMutation(ADD_BOOK);
  const [book, setBook] = useState(INITIAL_BOOK);
  const { name, genre, authorId } = book;

  const onChangeHandler = ({ target }) => {
    const { id, value } = target;
    setBook({ ...book, [id]: value });
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    if (!name || !genre || !authorId) return false;
    const { data } = await saveBook({
      variables: book,
      refetchQueries: [{ query: BOOKS }],
    });
    setBook(INITIAL_BOOK);
    console.log(data);
  };

  if (loading) return <div>Loading Authors...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <form id="add-book" onSubmit={onSubmitForm}>
      <div className="field">
        <label htmlFor="name">Book name:</label>
        <input id="name" type="text" value={name} onChange={onChangeHandler} />
      </div>

      <div className="field">
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          value={genre}
          onChange={onChangeHandler}
        />
      </div>

      <div className="field">
        <label htmlFor="authorId">Author:</label>
        <select id="authorId" onChange={onChangeHandler}>
          <option value={""}>Select author</option>
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

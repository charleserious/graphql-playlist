import { useQuery } from "@apollo/client";
import { AUTHORS } from "../queries/queries";
import { useState } from "react";

export const AddBook = (props) => {
  const { loading, error, data } = useQuery(AUTHORS);
  const [book, setBook] = useState({ name: "", genre: "", authorId: "" });
  const { name, genre } = book;

  const onChangeHandler = ({ target }) => {
    const { id, value } = target;
    setBook({ ...book, [id]: value });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(book);
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

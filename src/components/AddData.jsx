import { useState } from "react";
import { CREATE_BOOK } from "../graphql/addData";
import { useMutation } from "@apollo/client";
const AddData = () => {
  const [form, setForm] = useState({
    name: "",
    year: "",
    author: "",
  });
  const [addBookMutation] = useMutation(CREATE_BOOK);
  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", year: "", author: "" });
    addBookMutation({ variables: { ...form } });
    window.location.reload();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="escribe el nombre"
          value={form.name}
          name="name"
        />
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="escribe el año"
          value={form.year}
          name="year"
        />
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="escribe el autor"
          value={form.author}
          name="author"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AddData;

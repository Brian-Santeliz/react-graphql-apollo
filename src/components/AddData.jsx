import { useState } from "react";
import { CREATE_BOOK } from "../graphql/addData";
import { useMutation } from "@apollo/client";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdbreact";
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

    addBookMutation({ variables: { input: { ...form } } });
    setForm({ name: "", year: "", author: "" });
    window.location.reload();
  };
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="mx-auto mt-2">
            <form onSubmit={handleSubmit}>
              <p className="h5 text-center mb-4">Agregar un Libro</p>
              <div className="grey-text">
                <MDBInput
                  onChange={handleInputChange}
                  value={form.name}
                  name="name"
                  label="Escribe el nombre"
                  icon="book"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  onChange={handleInputChange}
                  value={form.year}
                  name="year"
                  label="Escribe el año"
                  icon="pencil-alt"
                  group
                  type="number"
                  validate
                />
                <MDBInput
                  name="author"
                  value={form.author}
                  onChange={handleInputChange}
                  label="Escribe el autor"
                  icon="user"
                  group
                  type="text"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn color="cyan" className="text-white" type="submit">
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                  Guardar
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default AddData;

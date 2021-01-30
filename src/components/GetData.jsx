import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/getData";
import { useMutation } from "@apollo/client";
import { DELETE_DATA } from "../graphql/deleteData";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
const GetData = ({ handleUpdateBook }) => {
  const { error, loading, data } = useQuery(GET_BOOKS);
  const [deleteBookMutation] = useMutation(DELETE_DATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  const handleDeleteClick = (id) => {
    const result = window.confirm("Estas seguro en eliminar este libro");
    if (result) {
      deleteBookMutation({ variables: { id } });
      window.location.reload();
    }
  };
  const handleUpdate = (id) => {
    handleUpdateBook(id);
  };
  return (
    <>
      <div>
        {data &&
          !loading &&
          !error &&
          data.getBooks.map((data) => {
            return (
              <div key={data.id}>
                <p>Nombre: {data.name}</p>
                <p>Año: {data.year}</p>
                <p>Autot: {data.author}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button onClick={() => handleDeleteClick(data.id)}>
                    Eliminar
                  </button>
                  <button onClick={() => handleUpdate(data.id)}>
                    Actualizar
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default GetData;

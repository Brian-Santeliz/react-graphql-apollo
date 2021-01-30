import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/getData";
const GetData = () => {
  const { error, loading, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  const handleDeleteClick = (id) => {
    const result = window.confirm("Estas seguro en eliminar este libro");
    if (result) {
      console.log("eliminado", id);
    }
  };
  return (
    <>
      <div>
        <h1>Get Data with Apollo & Graphql</h1>
        {data &&
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

import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/getData";
import { useMutation } from "@apollo/client";
import { DELETE_DATA } from "../graphql/deleteData";
const GetData = () => {
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

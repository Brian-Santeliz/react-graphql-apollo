import { useQuery } from "@apollo/client";
import { getBooks } from "../graphql/getData";
const GetData = () => {
  const { error, loading, data } = useQuery(getBooks);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  return (
    <>
      <div>
        <h1>Get Data with Apollo & Graphql</h1>
        {data &&
          data.getBooks.map((data) => {
            console.log(data);
            return <p key={data.id}>titulo: {data.name}</p>;
          })}
      </div>
    </>
  );
};

export default GetData;

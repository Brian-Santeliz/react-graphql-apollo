import { GetData, AddData } from "./components";
import { useQuery } from "@apollo/client";
import { getBookId } from "./graphql/getIdData";
import { useState } from "react";
function App() {
  const [currentId, setCurrentId] = useState("");
  const [dataUpdate, setDataUpdate] = useState({});
  const { loading, error, data } = useQuery(getBookId, {
    variables: { id: currentId },
  });

  const handleUpdateBook = (id) => {
    setCurrentId(id);
    if (data) {
      setDataUpdate(data.getBookId);
    }
  };
  return (
    <>
      <GetData handleUpdateBook={handleUpdateBook} />
      <AddData dataUpdate={dataUpdate} />
    </>
  );
}

export default App;

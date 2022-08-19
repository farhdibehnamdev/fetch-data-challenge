import { useEffect } from "react";
import { useState } from "react";
import { Form } from "./Form";
import "./App.css";
import { apiRequest } from "./apiRequest";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const optionsObj = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const response = apiRequest(`${API_URL}${reqType}`, optionsObj);
    response.then((data) => setItems(data));
  }, [reqType]);

  return (
    <div className="App">
      <Form setReqType={setReqType} reqType={reqType} />
    </div>
  );
}

export default App;

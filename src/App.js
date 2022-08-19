import { useEffect } from "react";
import { useState } from "react";
import { Form } from "./Form";
import { apiRequest } from "./apiRequest";
import { List } from "./List";
import "./App.css";

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
    const fetchItem = async () => {
      const response = apiRequest(`${API_URL}${reqType}`);
      response.then((data) => {
        console.log(data);
        setItems(data);
      });
    };
    fetchItem();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <List items={items} />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Username from "./Components/Username";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state?.user);


  return <>{user.userName === null ? <Username /> : <Form />}</>;
}

export default App;

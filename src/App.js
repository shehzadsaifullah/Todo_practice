import Card from "./Cards/Card";
import "./App.css";
import Input from "./InputForm/InputDetail";
import { useState } from "react";

const App = () => {
  const [recievedData, setRecievedData] = useState([]);
  const dataRecieverHandler = (todoItem) => {
    setRecievedData((todolist) => {
      return [
        ...todolist,
        { id: Math.random().toString(), listItem: todoItem },
      ];
    });
    console.log(recievedData);
  };
  /*
  (todolist) => {
      return [
        ...todolist,
        { id: Math.random().toString(), listItem: todoItem },
      ];
    }
  */

  return (
    <div>
      <Input passProps={dataRecieverHandler}></Input>
      <Card value={recievedData}></Card>
    </div>
  );
};

export default App;

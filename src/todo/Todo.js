import Card from "./Cards/Card";
import Input from "./InputForm/InputDetail";
import { useState } from "react";
import classes from "../App.module.css";

const Todo = () => {
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
    <div className={classes.main}>
      <Input passProps={dataRecieverHandler}></Input>
      <Card value={recievedData}></Card>
    </div>
  );
};
export default Todo;

import BaseCard from "./Cards/BaseCard";
import Input from "./InputForm/InputDetail";
import { useEffect, useState } from "react";
import classes from "../App.module.css";

const Todo = () => {
  const [recievedData, setRecievedData] = useState([]);

  useEffect(() => {
    console.log(recievedData);
  }, [recievedData]);

  const dataRecieverHandler = (todoItem) => {
    setRecievedData((todolist) => {
      return [...todolist, { id: Math.random(), listItem: todoItem }];
    });
  };

  //new funtion from card to update/delete items in parent///
  const deleteActual = (rcvdID) => {
    const list = recievedData.filter((entry) => entry.id !== rcvdID);
    setRecievedData(list);
  };

  const editActual = (rcvdID, newEntryData) => {
    const newList = recievedData.map((entry) => {
      if (entry.id === rcvdID) {
        const updatedItem = {
          ...entry,
          listItem: newEntryData,
          /*im trying to get the new entry from editform
          through card and recieve it here to be updated 
          in original state of original list
          */
        };
        return updatedItem;
      }

      return entry;
    });
    setRecievedData(newList);
  };

  /////////////////////////////////////////////////////////////

  return (
    <div className={classes.main}>
      <Input passProps={dataRecieverHandler}></Input>
      <BaseCard
        value={recievedData}
        deleteProps={deleteActual}
        editProps={editActual}
      ></BaseCard>
    </div>
  );
};
export default Todo;

import { useState, useEffect } from "react";
import BasicCard from "./BasicCard";

const List = (props) => {
  const recievedData = props.value;
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    setItemsList(recievedData);
  }, [recievedData]);

  const deleteHandler = (id) => {
    props.deleteProps(id);
    setItemsList(props.value);
  };

  const editHandler = (id, dataFromForm) => {
    props.editProps(id, dataFromForm);
    setItemsList(props.value);
  };

  return (
    <div>
      {itemsList.map((entry) => (
        <BasicCard
          object={entry}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};
export default List;

import { useState, useEffect } from "react";
import classes from "./Card.module.css";
import BasicCard from "./BasicCard";

const Card = (props) => {
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
    <div className={classes.card}>
      <ul>
        {itemsList.map((entry) => (
          <BasicCard
            object={entry}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
};
export default Card;

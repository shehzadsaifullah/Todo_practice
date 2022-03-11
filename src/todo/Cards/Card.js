import { useState, useEffect } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const recievedPropsList = props.value;

  const [newList, setNewValue] = useState([]);

  useEffect(() => {
    setNewValue(recievedPropsList);
  }, []);

  const deleteHandler = (id) => {
    const list = props.value.filter((entry) => entry.id !== id);
    setNewValue(list);
  };

  const editHandler = () => {};

  return (
    <div className={classes.card}>
      <ul>
        {newList.map((entry) => (
          <li key={entry.id}>
            {entry.listItem}
            <button className={classes.button} onClick={editHandler}>
              Edit
            </button>
            <button
              className={classes.button}
              onClick={() => deleteHandler(entry.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Card;

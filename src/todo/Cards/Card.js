import { useState, useEffect } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const recievedData = props.value;
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    setItemsList(recievedData);
  }, [recievedData]);

  const deleteHandler = (id) => {
    const list = itemsList.filter((entry) => entry.id !== id);
    setItemsList(list);
  };

  const editHandler = () => {};

  return (
    <div className={classes.card}>
      <ul>
        {itemsList.map((entry) => (
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

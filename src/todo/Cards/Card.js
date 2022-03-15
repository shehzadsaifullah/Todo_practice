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

  const editHandler = (id) => {
    const newList = itemsList.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          listItem: "edited",
        };
        return updatedItem;
      }

      return item;
    });

    setItemsList(newList);
  };

  return (
    <div className={classes.card}>
      <ul>
        {itemsList.map((entry) => (
          <li
            style={{
              textDecoration: "Bold",
            }}
            key={entry.id}
          >
            {entry.listItem}
            <button
              className={classes.button}
              onClick={() => editHandler(entry.id)}
            >
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

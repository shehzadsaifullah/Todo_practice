import { useState, useEffect } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const recievedData = props.value;
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    setItemsList(recievedData);
  }, [recievedData]);

  /*
  const deleteHandler = (id) => {
    const list = itemsList.filter((entry) => entry.id !== id);
    setItemsList(list);
  };
*/
  const deleteHandler = (id) => {
    props.deleteProps(id);
    setItemsList(props.value);
  };

  /*
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
*/
  const editHandler = (id) => {
    props.editProps(id);
    setItemsList(props.value);
  };

  return (
    <div className={classes.card}>
      <ul>
        {itemsList.map((entry) => (
          <li key={entry.id}>
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

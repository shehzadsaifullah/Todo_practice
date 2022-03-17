import { useState, useEffect } from "react";
import classes from "./Card.module.css";
import EditForm from "../EditForm/EditForm";
const Card = (props) => {
  const recievedData = props.value;
  const [itemsList, setItemsList] = useState([]);
  const [boolEditState, setBoolEditState] = useState(false);

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
              onClick={() => {
                setBoolEditState(true);
              }}
            >
              Edit
            </button>

            <button
              className={classes.button}
              onClick={() => deleteHandler(entry.id)}
            >
              Delete
            </button>
            {boolEditState && (
              <div>
                <EditForm />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Card;

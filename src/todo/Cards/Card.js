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

  const deleteHandler = (id) => {
    props.deleteProps(id);
    setItemsList(props.value);
  };

  const editHandler = (id, dataFromForm) => {
    console.log("valin func", dataFromForm);
    props.editProps(id, dataFromForm);
    /*i need to pass the new date from

      to the parent componenet*/
    setItemsList(props.value);
    setBoolEditState(false);
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
                <EditForm passNewList={(val) => editHandler(entry.id, val)} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Card;

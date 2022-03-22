import { useState, useEffect } from "react";
import classes from "./Card.module.css";
import EditForm from "../EditForm/EditForm";
const BasicCard = (props) => {
  //only bool state neeeded to to render textbox for edit
  //no need to set other state for values bcuz that gona happen in CARD
  const [boolEditState, setBoolEditState] = useState(false);

  const baseDeleteHandler = (id) => {
    props.deleteHandler(id);
  };

  const baseEditHandler = (id, dataFromForm) => {
    props.editHandler(id, dataFromForm);
    console.log("valin func", dataFromForm);
    setBoolEditState(false);
  };

  return (
    <div>
      <li key={props.id}>
        {props.listItem}
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
          onClick={() => baseDeleteHandler(props.id)}
        >
          Delete
        </button>

        {boolEditState && (
          <div>
            <EditForm passNewList={(val) => baseEditHandler(props.id, val)} />
          </div>
        )}
      </li>
    </div>
  );
};
export default BasicCard;

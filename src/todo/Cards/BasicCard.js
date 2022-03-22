import { useState, useEffect } from "react";
import classes from "./Card.module.css";
import EditForm from "../EditForm/EditForm";
const BasicCard = (props) => {
  console.log(props.object.id);
  console.log(props.object.listItem);
  //only bool state neeeded to to render textbox for edit
  //no need to set other state for values bcuz that gona happen in CARD
  const [boolEditState, setBoolEditState] = useState(false);

  const baseDeleteHandler = (id) => {
    props.deleteHandler(id);
  };

  const baseEditHandler = (id, dataFromForm) => {
    props.editHandler(id, dataFromForm);
    setBoolEditState(false);
  };

  return (
    <div className={classes.card}>
      <li key={props.object.id}>
        {props.object.listItem}
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
          onClick={() => baseDeleteHandler(props.object.id)}
        >
          Delete
        </button>

        {boolEditState && (
          <div>
            <EditForm
              object={props.object.listItem}
              passNewList={(val) => baseEditHandler(props.object.id, val)}
            />
          </div>
        )}
      </li>
    </div>
  );
};
export default BasicCard;

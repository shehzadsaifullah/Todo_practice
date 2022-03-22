import { useState } from "react";
import classes from "../Cards/Card.module.css";

const EditForm = (props) => {
  const [newData, setNewData] = useState();

  const newInputInfo = (event) => {
    setNewData(event.target.value);
  };

  const submitNewData = () => {
    const abc = 10;
    props.passNewList(newData, abc);
  };

  return (
    <div>
      <label>Edit your item</label>
      <input
        className={classes.input}
        type="text"
        onChange={newInputInfo}
        defaultValue={props.object}
      ></input>
      <button className={classes.button} onClick={submitNewData}>
        Submit Changes
      </button>
    </div>
  );
};
export default EditForm;

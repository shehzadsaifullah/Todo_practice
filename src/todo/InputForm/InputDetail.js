import { useState } from "react";
import classes from "./InputForm.module.css";

const Input = (props) => {
  const [listEntery, setListEntery] = useState("");

  const inputHandler = (event) => {
    setListEntery(event.target.value);
  };
  const handleSubmit = (event) => {
    props.passProps(listEntery);
    event.preventDefault();
    setListEntery("");
  };
  return (
    <form onSubmit={handleSubmit} className={classes.text}>
      <label>New Task : </label>
      <input
        className={classes.input}
        type="text"
        value={listEntery}
        onChange={inputHandler}
      ></input>
      <button className={classes.button} type="submit">
        addList
      </button>
    </form>
  );
};
export default Input;

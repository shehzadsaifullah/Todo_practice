import { useState } from "react";

const Input = (props) => {
  const [listEntery, setListEntery] = useState("");
  const inputHandler = (event) => {
    setListEntery(event.target.value);
  };
  const handleSubmit = (event) => {
    props.passProps(listEntery);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>New Task : </label>
      <input type="text" onChange={inputHandler}></input>
      <button type="submit">addList</button>
    </form>
  );
};
export default Input;

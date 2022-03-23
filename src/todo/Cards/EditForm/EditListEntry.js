import { useRef } from "react";
import classes from "../Card.module.css";

const EditForm = (props) => {
  //using ref instead of states to store value on every event of the
  //input element, just so it can get the default value without any
  //specific event to be updated(like onchnge for every keystroke)
  const itemDefaultValue = useRef();

  // const [newData, setNewData] = useState();

  // const newInputInfo = (event) => {
  //   setNewData(event.target.value);
  // };

  const submitNewData = () => {
    const defaultValue = itemDefaultValue.current.value;
    const abc = 10;
    props.passNewList(defaultValue, abc);
  };

  return (
    <div>
      <label>Edit your item</label>
      <input
        className={classes.input}
        type="text"
        defaultValue={props.object}
        ref={itemDefaultValue}
      ></input>
      <button className={classes.button} onClick={submitNewData}>
        Submit Changes
      </button>
    </div>
  );
};
export default EditForm;

import { useState } from "react";

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
        type="text"
        onChange={newInputInfo}
        defaultValue={props.object}
      ></input>
      <button onClick={submitNewData}>Submit Changes</button>
    </div>
  );
};
export default EditForm;

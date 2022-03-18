import { useState } from "react";

const EditForm = (props) => {
  const [newData, setNewData] = useState();

  const newInputInfo = (event) => {
    setNewData(event.target.value);
  };

  const submitNewData = () => {
    props.passNewList(newData);
  };

  return (
    <div>
      <label>Edit your item</label>
      <input type="text" onChange={newInputInfo}></input>
      <button onClick={submitNewData}>Submit Changes</button>
    </div>
  );
};
export default EditForm;

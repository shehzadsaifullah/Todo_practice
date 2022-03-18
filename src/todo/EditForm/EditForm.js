import { useState } from "react";

const EditForm = (props) => {
  const [newData, setNewData] = useState();

  const newInputInfo = (event) => {
    setNewData(event.target.value);
  };

  return (
    <div>
      <form>
        <label>Edit your item</label>
        <input type="text" onChange={newInputInfo}></input>
        <button type="submit">submit changes</button>
      </form>
    </div>
  );
};
export default EditForm;

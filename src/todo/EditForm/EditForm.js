import { useState } from "react";

const editForm = () => {
  //const [newData, setNewData] = useState();

  const newInputInfo = (event) => {
    console.log("HelloEDIT");
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
export default editForm;

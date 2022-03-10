const EditInputs = () => {
  const newInputHandler = () => {};
  return (
    <form>
      <label>New Changes</label>
      <input type="text" onChange={newInputHandler}></input>
      <button>SAVE</button>
    </form>
  );
};
export default EditInputs;

import "./App.css";
import classes from "./App.module.css";
import Todo from "./todo/Todo";

const App = () => {
  return (
    <div className={classes.main}>
      <Todo />
    </div>
  );
};

export default App;

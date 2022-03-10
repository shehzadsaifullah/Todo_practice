import classes from "./Card.module.css";

const Card = (props) => {
  /*<ul>
        {props.value.map((entry) => {
          <li key={entry.id}>{entry.todolist}</li>;
        })}
      </ul>*/
  return (
    <div>
      <div className={classes.card}>
        <ul>
          {props.value.map((entry) => (
            <li key={entry.id}>
              {entry.listItem}
              <button className={classes.button}> Edit </button>
              <button className={classes.button}> Delete </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Card;

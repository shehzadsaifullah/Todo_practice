const Card = (props) => {
  /*<ul>
        {props.value.map((entry) => {
          <li key={entry.id}>{entry.todolist}</li>;
        })}
      </ul>*/
  return (
    <div>
      {props.value.map((entry) => {
        <li key={entry.id}>{entry.todolist}</li>;
      })}
    </div>
  );
};
export default Card;

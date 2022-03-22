const BasicCard = (props)=>{
    return
    <div>
        <li key={props.id}>
            {props.listItem}
            <button
              className={classes.button}
              onClick={() => {
                setBoolEditState(true);
              }}
            >
              Edit
            </button>

            <buttonstton}
              onClick={() => deleteHandler(props.id)}
            >
              Delete
            </button>
            {boolEditState && (
              <div>
                <EditForm
                  passNewList={(val) => editHandler(props.id, val)}
                />
              </div>
            )}
          </li>
    </div>
}
export default BasicCard;
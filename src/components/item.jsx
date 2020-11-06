import React from "react";

export default function Item(props) {
  const [edit, setEdit] = React.useState(false);
  const [value, setValue] = React.useState(props.item.task);
  const handleEditChange = (event) => {
    const temp = event.target.value;
    setValue(temp);
  };
  const handleEditButton = () => {
    setEdit(true);
  };
  return (
    <>
      <li className="list">{props.item.task}</li>
      <button
        className="delete"
        onClick={() => {
          props.toDelete(props.index);
        }}
      >
        {" "}
        Delete
      </button>

      <button className="edit" onClick={handleEditButton}>
        {" "}
        Edit
      </button>
      {!edit ? null : (
        <input
          className="edittask"
          id="edit"
          name="edit"
          value={value}
          onChange={handleEditChange}
        />
      )}
      {!edit ? null : (
        <button
          className="saveTask"
          onClick={() => props.toEdit(props.index, value)}
        >
          Save
        </button>
      )}
    </>
  );
}

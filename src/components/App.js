import React from "react";
import "./../styles/App.css";
import Item from "./item";

function App() {
  const [toDoList, setToDoList] = React.useState([]);
  const [value, setValue] = React.useState("");

  const handleSaveChange = (event) => {
    const currentValue = event.target.value;
    setValue(currentValue);
  };
  const handleSave = () => {
    if (value === "") {
      return;
    }
    const tempToDo = [...toDoList];
    const obj = {};
    obj.task = value;
    tempToDo.push(obj);
    setToDoList(tempToDo);
    setValue("");
  };

  const handleDelete = (index) => {
    const tempToDo = [...toDoList];
    tempToDo.splice(index, 1);
    setToDoList(tempToDo);
  };

  const handleEdit = (index, editValue) => {
    if (editValue === "") {
      return;
    }
    const tempToDo = [...toDoList];
    tempToDo[index].task = editValue;
    setToDoList(tempToDo);
  };
  return (
    <div id="main">
      <input id="task" name="task" onChange={handleSaveChange} value={value} />
      <button id="btn" onClick={handleSave}>
        save
      </button>
      <div>
        {toDoList.length === 0 ? (
          <p>To-Do List is empty</p>
        ) : (
          toDoList.map((item, index) => (
            <Item
              key={item.task}
              item={item}
              toDelete={handleDelete}
              toEdit={handleEdit}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;

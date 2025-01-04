import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";

export default function TodoItem({ item }) {
  const { checkItem, handleRemoveItem, toggleEdit } = useContext(TodoContext);

  // const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="todo-item"
      style={{ textDecoration: item.completed ? "line-through" : "none" }}
    >
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => checkItem(item)}
        id={item.title}
      />
      <label htmlFor={item.title}>{item.title}</label>
      {/* {isEditing ? (
        <input
          type="text"
          value={item.title}
          onChange={(e) => updateTodo({ ...item, title: e.target.value })}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsEditing(false);
            }
          }}
          autoFocus
        />
      ) : (
        <label htmlFor={item.title}>{item.title}</label>
      )} */}
      <span
        className="icon cancel-icon"
        onClick={() => handleRemoveItem(item.id)}
      >
        <HiOutlineTrash />
      </span>

      <span className="icon edit-icon" onClick={() => toggleEdit(item)}>
        <HiPencilAlt />
      </span>
    </div>
  );
}

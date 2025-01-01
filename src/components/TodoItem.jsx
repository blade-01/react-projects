function TodoItem({ item, handleCheck, handleRemoveItem }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: item.completed ? "line-through" : "none" }}
    >
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheck(item)}
        id={item.title}
      />
      <label htmlFor={item.title}>{item.title}</label>
      <span className="cancel-icon" onClick={() => handleRemoveItem(item.id)}>
        x
      </span>
    </div>
  );
}

export default TodoItem;

import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../context/TodoContext";

export default function TodoList() {
  const { list, checkAllItems, allItemsCompleted } = useContext(TodoContext);

  return (
    <div className="todo-list">
      <div className="todo-list--header">
        <h2>Todo List</h2>
        <div className="todo-list--header">
          <input
            type="checkbox"
            id="checkbox"
            checked={allItemsCompleted}
            onChange={() => checkAllItems(list)}
          />
          <label htmlFor="checkbox">Check All</label>
        </div>
      </div>
      <div>
        {list?.length ? (
          list?.map((item) => {
            return <TodoItem item={item} key={item.id} className="todo-item" />;
          })
        ) : (
          <h2>Oops!, no data available yet. 😔</h2>
        )}
      </div>
    </div>
  );
}

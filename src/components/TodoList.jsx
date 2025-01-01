import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList({
  list,
  handleCheck,
  handleCheckAll,
  handleAddTodo,
  handleRemoveItem,
  allItemsCompleted
}) {
  return (
    <div className="todo-list">
      <TodoForm addTodo={handleAddTodo} />
      <div className="todo-list--header">
        <h2>Todo List</h2>
        <div className="todo-list--header">
          <input
            type="checkbox"
            id="checkbox"
            checked={allItemsCompleted}
            onChange={() => handleCheckAll(list)}
          />
          <label htmlFor="checkbox">Check All</label>
        </div>
      </div>
      <div>
        {list?.length ? (
          list?.map((item) => {
            return (
              <TodoItem
                item={item}
                key={item.id}
                handleCheck={handleCheck}
                handleRemoveItem={handleRemoveItem}
                className="todo-item"
              />
            );
          })
        ) : (
          <h2>Ooops!, no data available yet. 😔</h2>
        )}
      </div>
    </div>
  );
}

export default TodoList;

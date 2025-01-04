import { createContext, useReducer, useState } from "react";
import TodoData from "../data/TodoData";
import TodoReducer from "../reducer/TodoReducer";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {

  const [list, dispatch] = useReducer(TodoReducer, TodoData);

  const [isEdit, setIsEdit] = useState({
    edit: false,
    item: null
  });

  const allItemsCompleted = list.every((todo) => todo.completed);

  function toggleEdit(item) {
    setIsEdit({
      edit: true,
      item
    });
  }

  function checkAllItems() {
    dispatch({ type: "check_all_items" });
  }

  function checkItem(item) {
    dispatch({ type: "check_item", payload: item });
  }

  function addTodo(item) {
    dispatch({ type: "add_todo", payload: item });
  }

  function updateTodo(item) {
    dispatch({ type: "edit_todo", payload: item });
    setIsEdit({
      edit: false,
      item: null
    });
  }

  function handleRemoveItem(id) {
    dispatch({ type: "remove_todo", id });
  }

  return (
    <TodoContext.Provider value={{
      list,
      isEdit,
      checkItem,
      checkAllItems,
      allItemsCompleted,
      addTodo,
      handleRemoveItem,
      updateTodo,
      toggleEdit
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
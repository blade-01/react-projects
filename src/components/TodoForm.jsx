import { useState, useContext, useEffect } from "react";
import UiBtn from "./Ui/Btn";
import TodoContext from "../context/TodoContext";
export default function TodoForm() {
  const { addTodo, isEdit, updateTodo } = useContext(TodoContext);

  useEffect(() => {
    if (isEdit.edit) {
      setState((prevState) => ({
        ...prevState,
        text: isEdit.item.title,
        btnDisabled: false
      }));
    }
  }, [isEdit]);

  const [state, setState] = useState({
    text: "",
    errorMessage: "",
    btnDisabled: true
  });

  function handleTextChange(e) {
    const newText = e.target.value;
    if (newText === "") {
      setState((prevState) => ({
        ...prevState,
        errorMessage: null,
        btnDisabled: true
      }));
    } else if (newText !== "" && newText.trim().length < 3) {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "Text must be at least 3 characters long",
        btnDisabled: true
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "",
        btnDisabled: false
      }));
    }
    setState((prevState) => ({ ...prevState, text: newText }));
  }

  function handleFormReset() {
    setState({ text: "", errorMessage: "", btnDisabled: true });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (state.text.trim().length >= 3) {
      const payload = {
        id: `#${Math.random().toString(26).substring(7).toUpperCase()}`,
        title: state.text,
        completed: false
      };
      if (isEdit.edit) {
        updateTodo({
          ...isEdit.item,
          title: state.text
        });
      } else {
        addTodo(payload);
      }
      handleFormReset();
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2>Add Items to todo list</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add todo item"
          onInput={handleTextChange}
          value={state.text}
          autoFocus
        />
        <UiBtn
          type="submit"
          outerClass="btn-secondary"
          disabled={state.btnDisabled}
        >
          {!isEdit.edit ? "Add" : "Update"}
        </UiBtn>
      </div>
      {state.errorMessage && (
        <small className="error">{state.errorMessage}</small>
      )}
    </form>
  );
}

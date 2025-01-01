import { useState } from "react";
import UiBtn from "./Ui/Btn";
function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  function handleTextChange(e) {
    if (text === "") {
      setErrorMessage(null);
      setBtnDisabled(true);
    } else if (text !== "" && text.trim().length < 3) {
      setErrorMessage("Text must be at least 3 characters long");
      setBtnDisabled(true);
    } else {
      setErrorMessage("");
      setBtnDisabled(false);
    }
    setText(e.target.value);
  }

  function handleFormReset() {
    setText("");
    setErrorMessage(false);
    setBtnDisabled(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim().length > 3) {
      const payload = {
        id: `#${Math.random().toString(26).substring(7).toUpperCase()}`,
        title: text,
        completed: false
      };
      addTodo(payload);
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
          value={text}
        />
        <UiBtn type="submit" outerClass="btn-secondary" disabled={btnDisabled}>
          Send
        </UiBtn>
      </div>
      {errorMessage && <small className="error">{errorMessage}</small>}
    </form>
  );
}

export default TodoForm;

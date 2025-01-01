import { useState } from "react"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import TodoData from "./data/TodoData"

function App() {
  const [list, setList] = useState(TodoData);

  const allItemsCompleted = list.every((todo) => todo.completed);

  function checkAllItems() {
    setList(() => {
      return list.map((todo) => {
        return {
          ...todo,
          completed: allItemsCompleted ? false : true
        }
      })
    })
  }

  function checkItem(item) {
    setList((prevList) => {
      return prevList.map((todo) => {
        if (todo.id === item.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }

  function addItemToList(item) {
    setList([...list, item])
  }

  function handleRemoveItem(id) {
    setList((prevList) => {
      return prevList.filter((todo) => todo.id !== id)
    })
  }

  return (
    <>
      <Header title="Welcome back, Blade 👋🏼" />
      <div className="container">
        <TodoList list={list} handleCheck={checkItem} handleCheckAll={checkAllItems} allItemsCompleted={allItemsCompleted} handleAddTodo={addItemToList} handleRemoveItem={handleRemoveItem} />
      </div>
    </>
  )
}

export default App
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { TodoProvider } from "../context/TodoContext";

export default function Home() {
  return (
    <div className="container">
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

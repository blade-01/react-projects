export default function TodoReducer(todos, action) {
  switch (action.type) {
    case 'add_todo': {
      return [...todos, action.payload];
    }
    case 'edit_todo': {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            completed: action.payload.completed
          };
        }
        return todo;
      });
    }
    case 'remove_todo': {
      return todos.filter((todo) => todo.id !== action.id);
    }
    case 'check_all_items': {
      const allItemsCompleted = todos.every((todo) => todo.completed);
      return todos.map((todo) => {
        return {
          ...todo,
          completed: allItemsCompleted ? false : true
        };
      });
    }
    case 'check_item': {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    }
    default: {
      return todos;
    }
  }
}
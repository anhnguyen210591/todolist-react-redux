const initState = {
  todoList : []
}

const todos = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { todoList } = state;
      return {
        ...state,
        todoList: [
          ...todoList,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ] 
      }
    case 'TOGGLE_TODO':
      const { todoList: todos } = state;
      return {
          ...state,
          todoList : todos.map((todo) => {
            return todo.id === action.id ? {...todo,completed: !todo.completed} : todo
          })
        };
    default:
      return state
  }
}

export default todos

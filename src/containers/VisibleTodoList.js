import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todoList, filter) => {
  console.log(todoList, filter)
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todoList
    case VisibilityFilters.SHOW_COMPLETED:
      return todoList.filter(todoList => todoList.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todoList.filter(todoList => !todoList.completed)
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: getVisibleTodos(state.todos.todoList, state.visibilityFilter.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

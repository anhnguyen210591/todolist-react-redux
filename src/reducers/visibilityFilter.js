const visibilityFilter = (state = { visibilityFilter: 'SHOW_ALL' }, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':      
      return {
        ...state,
        visibilityFilter : action.filter
      }
    default:
      return state
  }
}

export default visibilityFilter

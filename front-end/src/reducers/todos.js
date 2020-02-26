const initialState = {
  text: 'Hello, Reducerrrrr'
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    // case 'TOGGLE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id) ?
    //     {
    //       ...todo,
    //       completed: !todo.completed
    //     } :
    //     todo
    //   )
    default:
      return state
  }
}

export default todos

// Learning notes
// Reducers are used to take an action and the current state from the Redux store, and use the action payload to derive the next state for the Redux store: (state, action) => nextState.
const initialState = {
  username: "default user",
  scores: 15,
  recipes: [{}]
}

const users = (state = initialState, action) => {
  switch (action.type){
    case 'ADD_USER':
      return [
        ...state,
        {
          username: action.username,
          scores: action.scores,
          recipes: action.recipes
        }
      ]
      default:
      return state
  }
}

export default users
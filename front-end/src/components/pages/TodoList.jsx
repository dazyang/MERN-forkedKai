import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useDispatch, useSelector } from 'react-redux'
import { gql } from 'apollo-boost'

const TodosQuery = gql`
  {
    todos {
      id
      text
      complete
    }
  }
`
const UpdateMutation = gql`
  mutation($id: ID!, $text: String!, $complet: Boolean!) {
    updateTodo(id: $id, text: $text, complet: $complet)    
  }
`
function TodoList() {
  const { loading, error, data } = useQuery(TodosQuery)
  const { text, complete } = useSelector(state => state.todos)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return(
    <div>
      <h1>GraphQL server</h1>
        {/* {data.map(todo)} */}
      <h1>Redux Store</h1>

    </div>
  )
}

export default TodoList;
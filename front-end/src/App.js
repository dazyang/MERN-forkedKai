import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'

import Home from './components/pages/Home'
import UserProfile from './components/pages/UserProfile'

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
function App() {
  // const { loading, error, data } = useQuery(TodosQuery)
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

    return (
    <div className="App">
      <header>
        {/* <p>
        {data.todos[0].text}
        </p> */}
        <Home />
        <UserProfile />
      </header>
    </div>
  );
}

export default App;
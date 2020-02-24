import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
// import { graphql } from "apollo-boost"

const TodosQuery = gql`
  {
    todos {
      id
      text
      complete
    }
  }
`
function App() {
  const { loading, error, data } = useQuery(TodosQuery)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="App">
      <header className="App-header">
        <p>
         {data.todos[0].text}
        </p>
      </header>
    </div>
  );
}

export default App;

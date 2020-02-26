import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
import { useDispatch, useSelector } from 'react-redux';

// const TodosQuery = gql`
//   {
//     todos {
//       id
//       text
//       complete
//     }
//   }
// `
function App() {
  // const userProfiles = useSelector(state => state.profiles.user)
  const text = useSelector(state => state.todos.text)
  // const dispatch = useDispatch();

  // const { loading, error, data } = useQuery(TodosQuery)
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  return (
    <div className="App">
      <header className="App-header">
        <p>
         {text}
        </p>
        {/* <userProfile/> */}
      </header>
    </div>
  );
}

export default App;


// Notes
// useSelector() hook takes the Redux store state and returns the pieces of state you desire. 
// useDispatch() hook replaces connect()'s mapDispatchToProps. It returns your store's dispatch() method
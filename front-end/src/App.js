import React from 'react';
import './App.css';
import TodoList from './components/pages/TodoList'

function App() {
    return (
    <div className="App">
      <header>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
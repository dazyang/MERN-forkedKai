import React from 'react';
import './App.css';
import Home from './components/pages/Home'
import UserProfile from './components/pages/UserProfile'



function App() {
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
import React from 'react';
import List from './List/List.js';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul className="nav">
          <li>
            <a>Tasks</a>
          </li>
          <li>
            <a>Calendar</a>
          </li>
        </ul>
      </nav>
      <div>
        <List />
      </div>
    </>
  );
  
}

export default App;

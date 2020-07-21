import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';
import './App.css';
import List from './List/List.js';
import Calendar from './Calendar/Calendar.js';
import taskDetail from './taskDetail/taskDetail.js';

function App() {
  return (
    <>
      <nav>
        <ul className="nav">
          <li>
            <NavLink to="/" exact activeStyle={{color:'blue'}}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/calendar">Calendar</NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <Route path="/" exact render={() => <h1>Home page</h1>} />
        <Route path="/tasks" component={List} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/details/:id" component={taskDetail} />
        {/* <Route render={() => {<h1>404 not found</h1>}} /> */}
        <Redirect from={'/calendar'} to={'/'} />
      </div>

    </>
  );
  
}

export default App;

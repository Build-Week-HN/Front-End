import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import LogInForm from './LogInPage/logInPage';
import CommunityPage from './Community/CommunityPage';


function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);


  return (
    <div className="App">
      <Link 
        to="/login">Login here!</Link>
        <br />
      <Link 
      to="/community">Community Post</Link>
      <Route
        exact path="/login"
        render={props => {
          return <LogInForm {...props}/>;
      }}/>
       <Route
        path="/community"
        render={props => {
          return <CommunityPage {...props}/>;
      }}/>
    </div>
  );
}

export default App;

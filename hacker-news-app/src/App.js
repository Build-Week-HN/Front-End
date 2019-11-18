import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './LogInPage/loginStyles.css';
import LogInForm from './LogInPage/logInPage';

function App() {
  return (
    <div className="App">
      <LogInForm />
    </div>
  );
}

export default App;

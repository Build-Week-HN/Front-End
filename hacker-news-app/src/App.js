import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import LogInForm from './Components/LogInPage/logInPage';
import CommunityPage from './Components/Community/communityPage.js';
import Toolbar from './Components/Toolbar/Toolbar';
import Sidedrawer from './Components/Sidedrawer/Sidedrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import Register from '../src/Components/Forms/Register';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [hnData, sethnData] = useState([]);
  const [drawer,setDrawer] = React.useState(false)
  const toggleButton = ()=>{setDrawer(!drawer)}

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://bw-hackernews.herokuapp.com/posts",
      );
      sethnData(result.data);
    }
    fetchData();
}, []);

  return (
    <div>
      <div style={{height:'100%'}}>
        <Register/>
        <Toolbar toggleButton={toggleButton}/>
          {drawer? <Backdrop toggleButton={toggleButton}/>: null}
          {drawer? <Sidedrawer toggleButton ={toggleButton}/> : null}
        <main style={{marginTop: '160px'}}>
        <p>This is the page content</p>
        </main>
      </div>
      <div className="currentNews">
        {
          hnData.map((curr, index) => {
            return(
                <div key={index}>
                    <h1>{curr.title}</h1>
                    </div>
            );
        })
        }
      </div>
      <div className="App">
          <Link 
            to="/login">Login here!</Link>
            <br />
          <Link 
          to="/community">Community Post</Link>
          <Route
            exact path="/login"
            render={props => {
              return <LogInForm {...props} setError={setError}/>;
          }}/>
          <Route
            path="/community"
            render={props => {
              return <CommunityPage {...props}/>;
          }}/>
    </div>
  </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import LogInForm from './Components/LogInPage/logInPage';
import CommunityPage from './Components/Community/communityPage.js';
import Toolbar from './Components/Toolbar/Toolbar';
import Sidedrawer from './Components/Sidedrawer/Sidedrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import Register from './Components/Forms/Register';
import Dashboard from './Components/UserArea/Dashboard';

const Container = styled.div`
  width: 100vw;
`;

function App() {
  const [user, setUser] = useState();
  const [userRoute, setUserRoute] = useState("/login");
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([{
    title:"Title Example",
    author:"Emma",
    date: "19/11/2019",
    comment: "This is another comment"
  }]);
  const [hnData, sethnData] = useState([]);
  const [drawer,setDrawer] = useState(false)
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
    <Container>
      <Route 
        path="/"
        render={(props) => {
          return (
          <div style={{height:'100%', minHeight: '50px'}}>
            <Toolbar toggleButton={toggleButton}/>
              {drawer? <Backdrop toggleButton={toggleButton}/>: null}
              {drawer? <Sidedrawer toggleButton ={toggleButton}/> : null}
          </div>
          );
        }}/>
      <Route 
        exact path="/"
        render={() => {
          return(
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
          )}}/>
      <Route 
        exact path="/register"
        render={props => {
        return <Register {...props} setError={setError} /> 
      }}/>
      <Route
        exact path="/login"
        render={props => {
          return <LogInForm s
              setError={setError} 
              setUser={setUser} 
              userRoute={userRoute}
              setUserRoute={setUserRoute}
              />;
      }}/>
        <Route
          exact path={`/Dashboard/${user}`}
          render={props => {
            return <Dashboard 
              user={user} 
              hnData={hnData} 
              comments={comments} 
              setError={setError}
              />;
        }}/>
      <Route
        exact path="/community"
        render={props => {
          return <CommunityPage {
                ...props} 
                comments={comments} 
                setComments={setComments}/>;
      }}/>
  </Container>
  );
}

export default App;

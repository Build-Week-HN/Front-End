import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import "./index.css";
import LogInForm from "./Components/LogInPage/logInPage";
import CommunityPage from "./Components/Community/communityPage.js";
import Toolbar from "./Components/Toolbar/Toolbar";
import Sidedrawer from "./Components/Sidedrawer/Sidedrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import Register from "./Components/Forms/Register";
import Dashboard from "./Components/UserArea/Dashboard";
import HeaderText from "./Components/LatestNews/LatestNews/styles/HeaderText";
import Wrapper from "./Components/LatestNews/LatestNews/styles/Wrapper";
import LatestNews from "./Components/LatestNews/LatestNews/LatestNews";
import LandingPage from "./Components/LandingPage";
import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./assets/comment.png";
import Avatar from "./assets/avatar.png";
import Hnclone from "./assets/hnclone.png";

const Container = styled.div`
  width: 100vw;
`;

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [userRoute, setUserRoute] = useState("/login");

  const [error, setError] = useState(null);
  const [comments, setComments] = useState([
    {
      title: "Title Example",
      author: "Emma",
      date: "19/11/2019",
      comment: "This is another comment"
    }
  ]);
  const [hnData, sethnData] = useState([]);
  const [drawer, setDrawer] = useState(false);
  const toggleButton = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://bw-hackernews.herokuapp.com/posts");
      sethnData(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    axios
      .get("https://bw-hackernews.herokuapp.com/community")
      .then(response => {
        setComments(response.data.reverse());
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <Container>
      <Route
        path="/"
        render={props => {
          return (
            <div style={{ height: "100%" }}>
              <Toolbar toggleButton={toggleButton} />
              <Route exact path="/home" component={LandingPage}></Route>
              {drawer ? <Backdrop toggleButton={toggleButton} /> : null}
              {drawer ? <Sidedrawer toggleButton={toggleButton} /> : null}
            </div>
          );
        }}
      />
      <Route
        exact
        path="/"
        render={() => {
          return (
            <div className="currentNews">
              <HeaderText>Latest News:</HeaderText>
              {hnData.map((curr, index) => {
                return (
                  <ThemeProvider theme={theme}>
                    <Wrapper>
                      <LatestNews
                        key={index}
                        text={curr.text}
                        img
                        src={Avatar}
                        title={curr.title}
                        author={curr.author}
                        url={curr.url}
                        comment_count={curr.comment_count}
                      />
                    </Wrapper>
                  </ThemeProvider>
                );
              })}
            </div>
          );
        }}
      />
      <Route
        exact
        path="/register"
        render={props => {
          return <Register {...props} setError={setError} />;
        }}
      />
      <Route
        exact
        path="/login"
        render={props => {
          return (
            <LogInForm
              s
              setError={setError}
              setUser={setUser}
              userRoute={userRoute}
              setUserRoute={setUserRoute}
            />
          );
        }}
      />
      <Route
        exact
        path={`/dashboard/${user}`}
        render={props => {
          return (
            <Dashboard
              user={user}
              hnData={hnData}
              comments={comments}
              setError={setError}
              token={setToken}
            />
          );
        }}
      />
      <Route
        path="/community"
        render={props => {
          return (
            <CommunityPage
              {...props}
              setError={setError}
              comments={comments}
              setComments={setComments}
            />
          );
        }}
      />
      <Route
        path="/"
        render={props => {
          return <Footer />;
        }}
      />
    </Container>
  );
}

export default App;

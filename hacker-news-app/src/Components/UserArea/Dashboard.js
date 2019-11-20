import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommunityUpdates from "./CommunityUpdates";
import NewsUpdates from "./NewsUpdates";
import MyBookmarks from "./MyBookmarks";
import { gsap } from "gsap";
import { FaGraduationCap } from "react-icons/fa";

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  right: 8px;
  width: 100vw;
  display: flex;
  margin-top: 12px;
`;

const Header = styled.div`
  width: 40%;
  max-width: 400px;
`;

const SideBar = styled.div`
  background-color: #f2d6eb;
  height: 100%;
  width: 40%;
  max-width: 400px;
  color: #1a3e59;
  z-index: -1;
  display: flex;
  align-items: flex-end;
`;

const H1 = styled.h1`
  color: #1a3e59;
  padding: 80px 20px;
  font-size: 3rem;
  position: absolute;
  top: 60px;
  left: 30px;
  z-index: 1;
`;

const BookmarkContainer = styled.div`
  width: 100%;
  text-align: center;
  height: calc(50% - 20px);
`;

const Activities = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;
  height: 100%;
`;

const NewsContainer = styled.div`
  border: 1px solid black;
  height: calc(50% - 20px);
  margin: 10px 0px;
  overflow: scroll;
`;

const CommunityContainer = styled.div`
  border: 1px solid black;
  height: calc(50% - 10px);
  overflow: scroll;
`;

function Dashboard(props) {
  gsap.from(".welcome", { y: -900, duration: 3 });
  gsap.from(".sidebar", { x: -500, duration: 5, delay: 2 });
  gsap.from(".activities", { x: 500, duration: 7, delay: 4 });

  return (
    <div>
      <Header className="welcome">
        <H1>Welcome Back, {props.user}!</H1>
      </Header>
      <Container>
        <SideBar className="sidebar">
          <BookmarkContainer>
            <h3>My Bookmarks</h3>
            <MyBookmarks {...props} />
          </BookmarkContainer>
        </SideBar>
        <Activities className="activities">
          <NewsContainer>
            <h3>Latest News Updates</h3> <Link to="/">More</Link>
            <NewsUpdates {...props} />
          </NewsContainer>
          <CommunityContainer>
            <h3>What's happening in our community?</h3>
            <Link to="/community">More</Link>
            <CommunityUpdates {...props} />
          </CommunityContainer>
        </Activities>
      </Container>
    </div>
  );
}

export default Dashboard;

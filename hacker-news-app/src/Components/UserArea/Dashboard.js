import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommunityUpdates from "./CommunityUpdates";
import NewsUpdates from "./NewsUpdates";
import MyBookmarks from "./MyBookmarks";
import { gsap } from "gsap";

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  right: 8px;
  width: 100vw;
  max-width: 900px;
  display: flex;
  margin: 12px auto 0px;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
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
  width: 35%;
  position: absolute;
  top: 100px;
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
  width: 59%;
  height: 100%;
`;

const Subheading = styled.div`
  width: 97%;
  height: 72px;
  color: white;
  border-right: 2px solid #5c94bd;
  background-color: #5c94bd;
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: baseline;
`;

const NewsContainer = styled.div`
  height: calc(50% - 20px);
  border: 3px solid #5c94bd;
  margin: 20px 0px 10px 10px;
  overflow: scroll;
`;

const CommunityContainer = styled.div`
  border: 3px solid #5c94bd;
  border-top: 5px solid #5c94bd;
  height: calc(50% - 20px);
  margin: 0px 0px 10px 10px;
  overflow: scroll;
`;

const H3 = styled.h3`
  margin: 20px 20px;
`;

const Linked = styled(Link)`
  text-decoration: none;
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
`;

function Dashboard(props) {
  gsap.from(".sidebar", { x: -900, duration: 5, delay: 2 });
  gsap.from(".welcome", { y: -300, duration: 1 });
  gsap.from(".activities", { x: 1000, duration: 7, delay: 4 });

  return (
    <div>
      <Container>
        <Header className="welcome">
          <H1>Welcome Back, {props.user}!</H1>
        </Header>
        <SideBar className="sidebar">
          <BookmarkContainer>
            <h3>My Bookmarks</h3>
            <MyBookmarks {...props} />
          </BookmarkContainer>
        </SideBar>
        <Activities className="activities">
          <NewsContainer>
            <Subheading>
              <H3>Latest News Updates</H3>
              <Linked to="/">More</Linked>
            </Subheading>
            <NewsUpdates {...props} />
          </NewsContainer>
          <CommunityContainer>
            <Subheading>
              <H3>What's happening in our community?</H3>
              <Linked to="/community">More</Linked>
            </Subheading>
            <CommunityUpdates {...props} />
          </CommunityContainer>
        </Activities>
      </Container>
    </div>
  );
}

export default Dashboard;

import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommunityUpdates from "./CommunityUpdates";
import NewsUpdates from "./NewsUpdates";
import { gsap } from "gsap";

const Container = styled.div`
  height: calc(100vh - 150px);
  min-height: 600px;
  overflow: scroll;
  width: 100vw;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 70px auto 0px;
  padding: 10px;
`;

const TopBar = styled.div`
  height: 50px;
  width: 100%;
  text-align: center;
  margin: auto 0px;
  position: relative;
  bottom: 50px;
`;

const H1 = styled.h1`
  color: #1a3e59;
`;

const Activities = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0px auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const NewsContainer = styled.div`
  height: 100%;
  width: calc(50% - 20px);
  border: 5px solid #5c94bd;
  overflow: scroll;
  margin: 0px auto 20px;
  border-top: 5px solid #5c94bd;

  @media (max-width: 900px) {
    width: 90%;
    height: 500px;
  }
`;

const CommunityContainer = styled.div`
  border: 5px solid #5c94bd;
  border-top: 5px solid #5c94bd;
  height: 100%;
  width: calc(50% - 20px);
  overflow: scroll;
  margin: 0px auto;

  @media (max-width: 900px) {
    width: 90%;
    height: 500px;
  }
`;

const Subheading = styled.div`
  height: 72px;
  color: white;
  border: 8px solid #5c94bd;
  background-color: #5c94bd;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  position: sticky;
  top: 0px;
`;

const H3 = styled.h3`
  margin: 20px 20px;
`;

const Linked = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 20px;
`;

function Dashboard(props) {
  useEffect(() => {
    gsap.fromTo(".sidebar", { y: 40 }, { y: 100, duration: 2 });
    gsap.fromTo(
      ".sidebar",
      { y: 100 },
      { y: 180, opacity: 0, duration: 4, delay: 4 }
    );
    gsap.fromTo(".news", { x: -900 }, { x: 0, duration: 4, delay: 6 });
    gsap.fromTo(".community", { x: 900 }, { x: 0, duration: 4, delay: 6 });
  }, []);

  return (
    <div>
      <Container>
        <TopBar className="sidebar">
          <H1 className="welcome">Welcome Back, {props.user}!</H1>
        </TopBar>
        <Activities className="activities">
          <NewsContainer className="news">
            <Subheading>
              <H3>Latest News Updates</H3>
              <Linked to="/">More</Linked>
            </Subheading>
            <NewsUpdates {...props} />
          </NewsContainer>
          <CommunityContainer className="community">
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

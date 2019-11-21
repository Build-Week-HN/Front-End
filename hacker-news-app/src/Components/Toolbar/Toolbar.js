import React from "react";
import styled from "styled-components";
import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton";

const Lead = styled.header`
  position: fixed;
  width: 100%;
  background: purple;
  height: 70px;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

const Logo = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex-direction: row;
`;

const Items = styled.a`
  color: white;
  text-decoration: none;
  padding: 0 0.5rem;
  margin: 12px;
  font-size: 20px;
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const Division = styled.div`
  display: flex;
  flex-direction: row;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const Crest = styled.div`
  margin-left: 1rem;
`;

const Space = styled.div`
  flex: 1;
`;

function Toolbar(props) {
  return (
    <Lead className="toolbar">
      <Navigation className="toolbar_navigation">
        <div>
          <DrawerToggleButton toggleButton={props.toggleButton} />
        </div>
        <Crest className="toolbar_logo">
          <Logo href="#">THE LOGO</Logo>
        </Crest>
        <Space className="spacer" />
        <div className="toolbar_navigation-items">
          <List>
            <Items href="/">Latest News</Items>
            <List>
              <Items href="/">Users</Items>
            </List>
            <List>
              <Items href="/">Jobs</Items>
            </List>
            <List>
              <Items href="/community">Community</Items>
            </List>
            <List>
              <Items href="/">Teams</Items>
            </List>
          </List>
        </div>
      </Navigation>
    </Lead>
  );
}

export default Toolbar;

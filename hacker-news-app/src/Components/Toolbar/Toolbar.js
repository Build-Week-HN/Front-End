import React from "react";
import styled from "styled-components";
import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton";
import hnclone from "../../assets/hnclone.png";

const Lead = styled.header`
  position: fixed;
  width: 100%;
  background: purple;
  height: 90px;
  top: 0px;
  left: 0px;
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

const Avatar = styled.img`
  position: fixed;
  margin: 2px 3px 0 2vw;
  height: 100px;
  width: auto;
  display: flex;
`;
function Toolbar(props) {
  return (
    <Lead className="toolbar">
      <Navigation className="toolbar_navigation">
        <div>
          <DrawerToggleButton toggleButton={props.toggleButton} />
        </div>
        <Space className="spacer" />
        <Avatar className="avatar" src={hnclone} alt="logo" />
        <div className="toolbar_navigation-items">
          {/* <List>
            <Items href="/">Home</Items>
          </List> */}
          <List>
            <Items href="/">Latest News</Items>
            <List>
              <Items href="/">Users</Items>
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

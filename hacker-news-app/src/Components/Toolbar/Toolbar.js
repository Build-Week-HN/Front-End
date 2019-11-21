import React from "react";
import styled from "styled-components";
import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton";
// import hnclone from "../../assets/hnclone.png"
const Lead = styled.header`
  position: fixed;
  width: 100%;
  background: #470938;
  height: 70px;
  top: 0px;
  left: 0px;
`;
// const Image = styled.img`
// background: url("${hnclone}");
// display: flex;
// flex-wrap: wrap;
// top: 60px;
// font-size: 1rem;`
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex-direction: row;
  margin-top: 0.5rem;
`;
const Items = styled.a`
  color: white;
  text-decoration: none;
  padding: 0 0.5rem;
  margin: 12px;
  font-size: 20px;
  &:hover {
    background: rgba(210, 255, 82, 1);
    background: -moz-linear-gradient(
      left,
      rgba(210, 255, 82, 1) 0%,
      rgba(145, 232, 66, 1) 61%,
      rgba(145, 232, 66, 1) 100%
    );
    cursor: pointer;
    color: #470938;
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
          {/* <img src={hnclone}
            alt="logo"
            style={{ width: 200, height: 200, position: 'absolute', top: 40}}
          /> */}
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

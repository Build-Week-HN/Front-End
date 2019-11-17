import React from "react";
import styled from "styled-components";
import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton'

const Lead = styled.header`
  position: fixed;
  width: 100%;
  background: burlywood;
  height: 155px;
  top: 0px;
  left: 0px;
`;

const Logo = styled.a`
color: white;
text-decoration: none;
font-size: 1.5rem;`

const Navigation = styled.nav`
display: flex;
align-items: center;
padding: 0 1rem;
flex-direction: row;`

const Items = styled.a`
color: white;
 text-decoration: none;
 padding: 0 0.5rem;`

 const Division = styled.div`
 display: flex;
 flex-direction: row;
 `

 const List = styled.ul`
 list-style: none;
 display: flex;
 margin: 0;
 padding: 0;`

 const Crest = styled.div`
 margin-left: 0.5rem`

 const Space = styled.div`
 flex: 1`

function Toolbar() {
  return (
    <Lead className="toolbar">
      <Navigation className="toolbar_navigation">
        <div>
        <DrawerToggleButton/>
        </div>
        <Crest className="toolbar_logo">
          <Logo href="#">THE LOGO</Logo>
        </Crest>
        <Space className="spacer"/>
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
              <Items href="/">Community</Items>
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

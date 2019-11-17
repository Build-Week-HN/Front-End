import React from "react";
import styled from "styled-components";

const TopNav = styled.nav`
  height: 100%;
  position: fixed;
  background: white;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
`;
const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: #521751;
  font-size: 1.2rem;
`;

const ItemList = styled.li`
  margin: 0.5rem 0;
`;
function Sidedrawer() {
  return (
    <TopNav className="side-drawer">
      <UnorderedList>
        <ItemList>
          <Anchor href="/">Latest News</Anchor>
        </ItemList>
        <ItemList>
          <Anchor href="/">Users</Anchor>
        </ItemList>
        <ItemList>
          <Anchor href="/">Jobs</Anchor>
        </ItemList>
        <ItemList>
          <Anchor href="/">Community</Anchor>
        </ItemList>
        <ItemList>
          <Anchor href="/">Teams</Anchor>
        </ItemList>
      </UnorderedList>
    </TopNav>
  );
}

export default Sidedrawer;

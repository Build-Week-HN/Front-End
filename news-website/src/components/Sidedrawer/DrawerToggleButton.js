import React from "react";
import styled from "styled-components";

const TopButton = styled.button`
height: 24px;
width:36px;
background: transparent;
border: none;
cursor: pointer;
display: flex;
flex-direction: column;

& focus{
    outline: none;
}`


const Line = styled.div`
width: 30px;
height: 1px;
background: white;`

function DrawerToggleButton() {
  return (
    <TopButton className="toggle-button">
      <Line className="toggle-button_line" />
      <Line className="toggle-button_line" />
      <Line className="toggle-button_line" />
    </TopButton>
  );
}

export default DrawerToggleButton;

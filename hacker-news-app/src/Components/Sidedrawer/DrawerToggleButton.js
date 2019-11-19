import React, { useState } from "react";
import styled from "styled-components";

const TopButton = styled.button`
  height: 24px;
  width: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  justify-content: space-around;
  outline: none;
`;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background: white;
`;

function DrawerToggleButton(props) {
  return (
    <TopButton className="toggle-button" onClick={() => props.toggleButton()}>
      <Line className="toggle-button_line" />
      <Line className="toggle-button_line" />
      <Line className="toggle-button_line" />
    </TopButton>
  );
}

export default DrawerToggleButton;

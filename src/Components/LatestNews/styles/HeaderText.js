import styled from "styled-components";

export default styled.h1`
  font-family: ${props => props.theme.font};
  text-transform: capitalize;
  color: #470938;
  position: flex;
  text-align: center;
  border-bottom: 2px #470938 solid;
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

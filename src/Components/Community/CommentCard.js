import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

const Container = styled.div`
  width: calc(100% - 2px);
  max-width: 900px;
  height: 110px;
  margin: 0px auto;
  color: black;
  border: 1px solid #5c94bd;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: baseline;
  line-height: 0.5;
  width: 90%;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 20px 0px 8px 40px;
`;

const Author = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  margin-left: 60px;
`;

const Date = styled.p`
  font-size: 0.6rem;
  position: relative;
  bottom: 8px;
  margin-left: 60px;
`;

const Comment = styled.p`
  margin-left: 20px;
  font-size: 0.8rem;
  width: 90%;
  position: relative;
  bottom: 15px;
`;

function CommentCard(props) {
  return (
    <Container>
      <InfoContainer>
        <Title>{props.curr.title}</Title>
        <Author>{props.curr.author}</Author>
        <Date>{props.curr.date}</Date>
      </InfoContainer>
      <Comment>{props.curr.text}</Comment>
    </Container>
  );
}

export default CommentCard;

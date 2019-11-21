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

const Reaction = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  line-height: 1.6;
  width: 6%;
  padding-right: 20px;
  margin-top: 10px;
`;

const Icon = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 20px 0px 0px 20px;
`;

const Author = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  margin-left: 40px;
`;

const Date = styled.p`
  font-size: 0.6rem;
  position: relative;
  bottom: 10px;
  margin-left: 40px;
`;

const Comment = styled.p`
  margin-left: 20px;
  font-size: 0.8rem;
  width: 85%;
  position: relative;
  bottom: 25px;
`;

function CommentCard(props) {
  const [heartCount, setHeartCount] = useState(0);
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);

  return (
    <Container>
      <InfoContainer>
        <Title>{props.curr.title}</Title>
        <Author>{props.curr.author}</Author>
        <Date>{props.curr.date}</Date>
      </InfoContainer>
      <Reaction>
        <Icon onClick={() => setHeartCount(heartCount + 1)}>
          <FaHeart className="commentIcon" />
          {heartCount}
        </Icon>
        <Icon onClick={() => setUpCount(upCount + 1)}>
          <FaRegThumbsUp className="commentIcon" />
          {upCount}
        </Icon>
        <Icon onClick={() => setDownCount(downCount + 1)}>
          <FaRegThumbsDown className="commentIcon" />
          {downCount}
        </Icon>
      </Reaction>
      <br />
      <Comment>{props.curr.comment}</Comment>
    </Container>
  );
}

export default CommentCard;

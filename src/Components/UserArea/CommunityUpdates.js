import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const FeedContainer = styled.div`
  margin-top: 30px;
`;

const Container = styled.div`
  border-bottom: 2px solid #5c94bd;
  padding-top: 10px;
  width: 90%;
  max-height: 100px;
  overflow: scroll;
  margin: 10px auto;
`;

const Comment = styled.p`
  width: 90%;
  margin: 0px auto;
  font-size: 0.8rem;
`;

const Info = styled.div`
  width: 90%;
  text-align: right;
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;

  .title {
    font-weight: bold;
    margin-right: 5px;
  }
`;

function CommunityUpdate(props) {
  return (
    <FeedContainer>
      {props.comments.map((curr, index) => {
        if (index < 10) {
          return (
            <Container key={index}>
              <Info>
                <span className="title">{curr.title}</span>
                <span>{curr.author}</span>
                <span>{curr.date}</span>
              </Info>
              <Comment>{curr.text}</Comment>
            </Container>
          );
        }
      })}
    </FeedContainer>
  );
}

export default CommunityUpdate;

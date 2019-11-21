import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const FeedContainer = styled.div`
  margin-top: 80px;
`;

const Container = styled.div`
  border-bottom: 2px solid #5c94bd;
  padding-top: 10px;
  width: 90%;
  max-height: 100px;
  overflow: hidden;
  margin: 10px auto;
`;

const Comment = styled.p`
  width: 90%;
  margin: 0px auto;
`;

const Info = styled.div`
  width: 90%;
  text-align: right;
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
`;

function CommunityUpdate(props) {
  return (
    <FeedContainer>
      {props.comments.map((curr, index) => {
        if (index < 5) {
          return (
            <Container key={index}>
              <Comment>{curr.comment}</Comment>
              <Info>
                <span>{curr.author}</span>
                <span>{curr.date}</span>
              </Info>
            </Container>
          );
        }
      })}
    </FeedContainer>
  );
}

export default CommunityUpdate;

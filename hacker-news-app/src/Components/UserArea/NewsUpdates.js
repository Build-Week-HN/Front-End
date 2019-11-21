import React, { useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const FeedContainer = styled.div`
  margin-top: 80px;
`;

const Info = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  font-size: 0.8rem;
  margin: 5px auto;
`;

const Title = styled.a`
  text-decoration: none;
  color: #1a3e59;
  font-weight: bold;
`;

const Comment = styled.div`
  width: 90%;
  font-size: 0.8rem;
  border-top: 1px dashed #5c94bd;
  margin: 5px auto;
`;

function NewsUpdates(props) {
  gsap.fromTo(".container", { y: 250 }, { duration: 20, y: -200, delay: 8 });

  const arrow = `\u25BC`;

  const [height, setHeight] = useState("100px");
  const Container = styled.div`
    border-bottom: 2px solid #5c94bd;
    padding-top: 10px;
    width: 90%;
    height: ${height};
    overflow: hidden;
    margin: 10px auto;
  `;

  function handleClick(e) {
    if (height === "100px") {
      setHeight("auto");
    } else {
      setHeight("100px");
    }
    e.stopPropagation();
  }

  return (
    <FeedContainer className="container">
      {props.hnData.map((curr, index) => {
        if (index < 10) {
          return (
            <Container key={index}>
              <Title href={curr.url}>{curr.title}</Title>
              <Info>
                <span>Comments: {curr.comment_count}</span>
                <button onClick={handleClick}>{arrow}</button>
              </Info>
              {curr.comments.map((curr, index) => {
                if (index < 3) {
                  return (
                    <Comment key={index}>
                      <span>{curr.author}</span>
                      <p>{curr.text}</p>
                    </Comment>
                  );
                }
              })}
            </Container>
          );
        }
      })}
    </FeedContainer>
  );
}

export default NewsUpdates;

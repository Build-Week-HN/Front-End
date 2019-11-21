import React, { useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const FeedContainer = styled.div`
  margin-top: 30px;
  overflow: scroll;
`;

const Container = styled.div`
  border-bottom: 2px solid #5c94bd;
  padding-top: 10px;
  width: 90%;
  height: 160px;
  overflow: hidden;
  margin: 10px auto;

  a {
    text-decoration: none;
    color: #1a3e59;
    font-weight: bold;
  }

  .info {
    display: flex;
    width: 90%;
    justify-content: space-between;
    font-size: 0.8rem;
    margin: 5px auto;
  }

  .comment {
    width: 90%;
    font-size: 0.8rem;
    border-top: 1px dashed #5c94bd;
    margin: 5px auto;
  }

  &.show {
    overflow: auto;
  }
`;

function NewsUpdates(props) {
  // gsap.fromTo(".container", { y: 250 }, { duration: 20, y: -200, delay: 8 });

  function handleClick(e) {
    e.currentTarget.classList.toggle("show");
  }

  function createHTML(props) {
    return { __html: props };
  }

  return (
    <FeedContainer className="container">
      {props.hnData.map((curr, index) => {
        if (index < 10) {
          return (
            <Container onClick={handleClick} key={index}>
              <a href={curr.url}>{curr.title}</a>
              <div className="info">
                <span>Comments: {curr.comment_count}</span>
                <button>{`\u25BC`}</button>
              </div>
              {curr.comments.map((curr, index) => {
                if (index < 3) {
                  return (
                    <div className="comment" key={index}>
                      <span>{curr.author}</span>
                      {/* <p>{curr.text}</p> */}
                      <div dangerouslySetInnerHTML={createHTML(curr.text)} />
                    </div>
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

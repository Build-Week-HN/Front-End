import React, { useState } from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddCommentForm from "./AddComment";

const Container = styled.div`
  width: 80%;
  margin: 90px auto 0px;
  position: relative;
  right: 8px;
`;

const SubHeading = styled.div`
  background-color: #1a3e59;
  margin: 0px auto;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

const CommunityLinks = styled(NavLink)`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;

function CommunityPage(props) {
  const [newComment, setNewComment] = useState({});

  const CommentsContainer = styled.div`
    width: 100%;
  `;
  console.log("Community page", props);

  return (
    <Container>
      <SubHeading>
        <CommunityLinks to="/community/add-comment">Add Comment</CommunityLinks>
      </SubHeading>
      <Route
        exact
        path="/community/add-comment"
        render={states => {
          return (
            <AddCommentForm
              {...states}
              newComment={newComment}
              setNewComment={setNewComment}
              comments={props.comments}
              setComments={props.setComments}
              setError={props.setError}
            />
          );
        }}
      />
      <CommentsContainer>
        {props.comments.map((curr, index) => {
          return (
            <div key={index}>
              <CommentCard curr={curr} index={index} />
            </div>
          );
        })}
      </CommentsContainer>
    </Container>
  );
}

export default CommunityPage;

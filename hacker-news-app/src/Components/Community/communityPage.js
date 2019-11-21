import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import CommentCard from "./CommentCard";
import FilterForm from "./Filter";
import AddCommentForm from "./AddComment";
import axios from "axios";

const Container = styled.div`
  width: 80%;
  margin: 10px auto;
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
`;

const CommunityLinks = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const CommentsContainer = styled.div`
  width: 100%;
`;

function CommunityPage(props) {
  const [newComment, setNewComment] = useState({});
  const [serachResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://bw-hackernews.herokuapp.com/community")
      .then(response => {
        props.setComments(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  return (
    <Container>
      <SubHeading>
        <CommunityLinks exact to="/community/filter">
          Filter
        </CommunityLinks>
        <CommunityLinks to="/community/add-comment">Add Comment</CommunityLinks>
      </SubHeading>
      <Route
        exact
        path="/community/filter"
        render={props => {
          return (
            <FilterForm
              serachResult={serachResult}
              setSearchResult={setSearchResult}
            />
          );
        }}
      />
      <Route
        exact
        path="/community/add-comment"
        render={props => {
          return (
            <AddCommentForm
              newComment={newComment}
              setNewComment={setNewComment}
              comments={props.comments}
              setComments={props.setComments}
            />
          );
        }}
      />
      <CommentsContainer>
        {props.comments.reverse().map((curr, index) => {
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

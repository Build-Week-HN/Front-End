import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 30px 0px 25px;
  margin: 0px auto;
  color: white;
  background-color: #5c94bd;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled(Link)`
  color: white;
  font-size: 2rem;
  text-decoration: none;
  position: absolute;
  right: 50px;
  top: 46px;
`;

const Input = styled.input`
  margin-left: 15px;
`;

function Filter(props) {
  const comments = props.comments;

  const handleChangeDate = e => {
    const search = e.target.value;
    const result = comments.filter(comment => {
      if (comment.date === e.target.value) {
        return comment;
      }
    });
    props.setComments(result);
    console.log(e.target.value);
  };

  const handleChangeAuthor = e => {
    console.log(e);
    const search = e.target.value.toLowerCase();
    const result = props.comments.filter(comment => {
      return comment.author.toLowerCase().includes(search);
    });
    props.setComments(result);
    console.log(e.target.value);
  };

  const handleChangeKeyword = e => {
    const search = e.target.value.toLowerCase();
    const result = props.comments.filter(comment => {
      return (
        comment.author.toLowerCase().includes(search) ||
        comment.comment.toLowerCase().includes(search) ||
        comment.title.toLowerCase().includes(search)
      );
    });
    props.setComments(result);
  };

  return (
    <Container>
      <Button to="/community">{`\u02DF`}</Button>
      <label>
        Date Posted:
        <Input type="date" name="date" onChange={handleChangeDate} />
      </label>
      <label>
        Keyword:
        <Input type="text" name="keyword" onChange={handleChangeKeyword} />
      </label>
      <label>
        Author:
        <Input type="text" name="author" onChange={handleChangeAuthor} />
      </label>
    </Container>
  );
}

export default Filter;

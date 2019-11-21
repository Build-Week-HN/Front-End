import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withFormik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Container = styled.div`
  padding: 10px 0px 0px;
  margin: 0px auto;
  color: white;
  background-color: #5c94bd;
  display: flex;
  justify-content: space-evenly;
`;

const CommentCard = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 20px auto 10px;
  text-align: center;
`;

const Button = styled(Link)`
  color: white;
  font-size: 2rem;
  text-decoration: none;
  position: absolute;
  right: 50px;
  top: 46px;
`;

const Info = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Label = styled.label`
  margin: 0px 10px;
`;

const Submit = styled.input`
  color: #1a3e59;
  border: 2px solid #1a3e59;
  border-radius: 5px;
  font-weight: bold;
  padding: 4px 10px;
  margin: 5px auto;

  &:hover {
    color: white;
    background-color: #1a3e59;
    transform: scale(1.1);
  }
`;

const InfoError = styled.div``;

const Error = styled.div`
  color: white;
  font-style: italic;
  font-size: 1rem;
`;

function AddComment(props) {
  return (
    <Container>
      <CommentCard>
        <Button to="/community">{`\u02DF`}</Button>
        <Form>
          <Info>
            <div>
              <Label name="title">Title:</Label>
              <Field type="text" name="title" />
            </div>
            <div>
              <Label nam="author">Author:</Label>
              <Field type="text" name="author" />
            </div>
          </Info>
          <Field
            as="textarea"
            name="text"
            rows="5"
            cols="70"
            placeholder="Type your comment here..."
          />
          <InfoError>
            <ErrorMessage name="title" render={err => <Error>{err}</Error>} />
            <ErrorMessage name="author" render={err => <Error>{err}</Error>} />
            <ErrorMessage name="text" render={err => <Error>{err}</Error>} />
          </InfoError>
          <br />
          <Submit type="submit" />
        </Form>
      </CommentCard>
    </Container>
  );
}

const AddCommentForm = withFormik({
  mapPropsToValues() {
    return {
      title: "",
      author: "",
      text: ""
    };
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required("Please give your comment a TITLE."),
    author: Yup.string(),
    text: Yup.string().min(20, "Your comment must be at least 20 characters")
  }),

  handleSubmit(commentData, formikbag) {
    axios
      .post("https://bw-hackernews.herokuapp.com/community", commentData)
      .then(response => {
        formikbag.props.setComments(commentData, [...formikbag.props.comments]);
        formikbag.resetForm();
      })
      .catch(error => {
        formikbag.props.setError(error.message);
      });
  }
})(AddComment);

export default AddCommentForm;

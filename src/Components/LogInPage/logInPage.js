import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import decode from "jwt-decode";
import Loader from 'react-loader-spinner'

const Container = styled.div`
  width: 400px;
  border: 4px solid #470938;
  margin: 170px auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
`;

const H1 = styled.h1`
  width: 101%;
  position: relative;
  right: 3px;
  margin-top: 0px;
  padding: 10px 0px;
  background-color: #470938;
  color: white;
  border-radius: 2px;
  z-index: -1;
`;

const RegistationContainer = styled.div`
  width: 80%;
  padding: 10px;
  border-top: 2px solid #470938;
  margin: 20px auto 0px;
  font-size: 0.8rem;
  text-align: center;
`;

const Button = styled(NavLink)`
  color: white;
  background-color: #5c94bd;
  padding: 6px;
  margin: 0px auto 10px;
  font-weight: bold;
  border-radius: 5px;
  font-size: 0.6rem;

  &:hover {
    color: #5c94bd;
    width: 80%;
    padding: 10px;
    border-top: 2px solid #470938;
    margin: 20px auto 0px;
    font-size: 0.8rem;
    text-align: center;
  }
`;

const Button = styled.button`
  color: white;
  background-color: #5c94bd;
  padding: 6px;
  margin: 0px auto 10px;
  font-weight: bold;
  border-radius: 5px;
  font-size: 0.6rem;

  &:hover {
    color: #5c94bd;
    background-color: white;
    border: 1px solid #5c94bd;
  }

  &:active {
    opacity: 0.7;
  }
`;

const SubmitButton = styled.input`
  color: white;
  font-size: 0.8rem;
  background-color: #470938;
  padding: 8px;
  margin: 10px auto;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #470938;
    background-color: white;
    border: 1px solid #470938;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 0.8rem;
  font-style: italic;
  position: relative;
  bottom: 15px;
`;

const DataFields = styled(Field)`
  width: 75%;
  max-width: 300px;
  border: none;
  border-bottom: 2px solid #f2d6eb;
  margin: 20px auto;
  padding: 5px;
  font-size: 1rem;
`;

const PasswordField = styled(Field)`
  margin: 10px;
`;

function LogIn(props) {
  return (
    <Container>
      <H1>Login</H1>
      <Form>
        <DataFields
          className="username"
          type="input"
          name="username"
          placeholder="Username"
        />
        <ErrorMessage name="username" render={err => <Error>{err}</Error>} />
        <DataFields
          className="password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <ErrorMessage name="password" render={err => <Error>{err}</Error>} />
        <br />
        <label>
          Remember password?
          <PasswordField
            className="remember_password"
            type="checkbox"
            name="remember_password"
          />
        </label>
        <br />
        <SubmitButton className="btn" type="submit" />
      </Form>
      <RegistationContainer>
        <p>Not registered yet? Register Now</p>
        <Button to="/register">Register</Button>
      </RegistationContainer>
    </Container>
  );
}

const LogInForm = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: "",
      remember_password: false
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password"),
    remember_password: Yup.boolean()
  }),

  handleSubmit(userData, formikbag) {
    axios
      .post("https://bw-hackernews.herokuapp.com/login", userData)
      .then(response => {
        formikbag.resetForm();
        localStorage.setItem("token", response.data.token);
        formikbag.props.history.push(`dashboard/${userData.username}`);
        formikbag.props.setUser(decode(response.data.token).name);
      })
      .catch(error => {
        formikbag.props.setError(error.message);
      });
  }
})(LogIn);

export default withRouter(LogInForm);

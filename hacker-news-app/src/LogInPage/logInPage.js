import React from 'react';
import { Router, Link  } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Container = styled.div`
    width: 400px;
    border: 4px solid #470938;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
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
`;


function LogIn() {

    return (
        <Container>
            <H1>Login</H1>
            <Form>
            <Field
                className="username"
                type="input"
                name="username"
                placeholder="Username"/>
            <Field 
                className="password"
                type="passord"
                name="password"
                placeholder="Password"/>
            <br />
            <label>
                Remember password?
                <Field 
                    className="remember_password"
                    type="checkbox" 
                    name="remember_password"/>
            </label>
            <br />
            <input
                className="btn" 
                type="submit" />
            <p>Not registered yet? Register Now</p>
            <button className="btn" >REGISTER</button>
            </Form>
        </Container>
    )
}

const LogInForm = withFormik({
    mapPropsToValues() {
        return {
            username:"",
            password:"",
            remember_password: false
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Please enter your username"),
        password: Yup.string().required("Please enter your password"),
        remember_password: Yup.boolean()
    })
})(LogIn);

export default LogInForm;
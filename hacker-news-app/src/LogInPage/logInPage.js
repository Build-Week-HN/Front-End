import React, { useState } from 'react';
import { Router, Link  } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
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

const RegistationContainer = styled.div`
    width: 80%;
    padding: 10px;
    border-top: 2px solid #470938;
    margin: 10px auto;
`;

const Button = styled.button`
    color: white;
    background-color: #5C94BD;
    padding: 8px;
    margin: 10px auto;
    font-weight: bold;
    border-radius: 5px;

    &:hover{
    color: #5C94BD;
    background-color: white;
    border: 1px solid #5C94BD;
}
`;

const [users, setUsers] = useState([]);
const [error, setError] = useState(null);


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
            </Form>
            <RegistationContainer>
                <p>Not registered yet? Register Now</p>
                <Button>REGISTER</Button>
            </RegistationContainer>
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
    }),

    handleSubmit(userData, formikbag){
        axios.post("...", userData)
            .then(response => {
                formikbag.resetForm();
                formikbag.setUsers([...formikbag.setUsers, response.data])
            })
            .catch(error => {
                setError(error.message)
            })
    }

})(LogIn);

export default LogInForm;
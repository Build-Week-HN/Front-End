import React from 'react';
import { Route, Link, } from 'react-router-dom';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    width: 400px;
    border: 4px solid #470938;
    margin: 100px auto;
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
`;

const RegistationContainer = styled.div`
    width: 80%;
    padding: 10px;
    border-top: 2px solid #470938;
    margin: 20px auto 0px;
    font-size: 0.8rem;
    text-align: center;
`;

const Button = styled.button`
    color: white;
    background-color: #5C94BD;
    padding: 6px;
    margin: 0px auto 10px;
    font-weight: bold;
    border-radius: 5px;
    font-size: 0.6rem;

    &:hover{
    color: #5C94BD;
    background-color: white;
    border: 1px solid #5C94BD;
}
`;

const P = styled.p`
    margin: 0px auto;
`;


function LogIn(props) {


    return (
        <Container>
            <H1>Login</H1>
            <Form>
            <Field
                className="username"
                type="input"
                name="username"
                placeholder="Username"/>
            <ErrorMessage 
            name="username" 
            render={err => <div className="errorMessage">{err}</div>}/>
            <Field 
                className="password"
                type="passord"
                name="password"
                placeholder="Password"/>
            <ErrorMessage 
            name="password" 
            render={err => <div className="errorMessage">{err}</div>}/>
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
                <Button>Register</Button>
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
        axios.post("https://bw-hackernewsclone.herokuapp.com/api/auth/login", userData)
            .then(response => {
                formikbag.resetForm();
                formikbag.props.setUsers([...formikbag.props.setUsers, response.data])
            })
            .catch(error => {
                formikbag.props.setError(error.message)
                alert(`You have entered an invalid username and/or password`)
            });
    }

})(LogIn);

export default LogInForm;
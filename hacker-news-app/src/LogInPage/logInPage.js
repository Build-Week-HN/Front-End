import React from 'react';
import { Router, Link  } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function LogIn() {

    return (
        <div>
        <Form>
            <h1>Login</h1>
            <Field
                type="input"
                name="username"
                placeholder="Username"
                />
            <Field 
                type="passord"
                name="password"
                placeholder="Password"
                />
            <label>
                Remember password?
                <Field type="checkbox" name="remember_password" />
            </label>
            <input type="submit" />
            <p>Not registered yet? Register Now</p>
            <button>REGISTER</button>
        </Form>
        </div>
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
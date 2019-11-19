import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";






function Register() {
  const [list, setList] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    conf_password: "",
    terms: false
  });

  return (
    <div className="signup">
      <h1 className="heading">HACKER NEWS SIGNUP PAGE</h1>
      <Form className="picture">
      <ErrorMessage
        name="firstname"
        render={msg => <div className="error">{msg}</div>}
      />
      <label>First Name</label>
      <Field type="text" placeholder="First Name" name="firstname"></Field>

      <ErrorMessage
        name="lastname"
        render={msg => <div className="error">{msg}</div>}
      />
      <label>Last Name</label>
      <Field type="text" placeholder="Last Name" name="lastname"></Field>

      <ErrorMessage
        name="username"
        render={msg => <div className="error">{msg}</div>}
      />
      <label>User Name</label>
      <Field type="text" placeholder="User Name" name="username"></Field>

      <ErrorMessage
        name="email"
        render={msg => <div className="error">{msg}</div>}
      />
      <label>Email</label>
      <Field type="text" placeholder="Email" name="email"></Field>

      <ErrorMessage
        name="password"
        render={msg => <div className="error">{msg}</div>}
      />
      <label>Password</label>
      <Field
        type="password"
        placeholder="Choose a password"
        name="password"
      ></Field>

      <ErrorMessage
        name="conf_password"
        render={msg => <div className="error">{msg}</div>}
      />
      <label>Confirm Password</label>
      <Field
        type="password"
        placeholder="Re-enter password"
        name="conf_password"
      ></Field>

      <label>I have agreed to the terms and conditions
      <Field type="checkbox" name="terms"></Field>
      </label>

      <input type="submit" className="point"></input>
    </Form>
    </div>
    
  );
}

const Registration = withFormik({
  mapPropsToValues() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      conf_password: "",
      terms: false
    };
  },
  validationSchema: yup.object().shape({
    firstname: yup.string().required("Please enter your first name"),
    lastname: yup.string().required("Please enter your last name"),
    username: yup.string().required("Please enter a valid username"),
    email: yup.string().email("Type in your email"),
    password: yup.string().required("Please enter password"),
    conf_password: yup.string().required("confirm password"),
    terms: yup.boolean()
  }),
  handleSubmit(values, tools) {
    // console.log(values, tools);
    const list = tools.props.userList;
    const setList = tools.props.setUserList;
    axios
      .post("https://reqres.in/api/users_", values)
      .then(response => {
        let info = response.data;
        console.log(info);
        setList([...list, response.data]);
        tools.resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
})(Register);
export default Registration;

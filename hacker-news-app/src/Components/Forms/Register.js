import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

function Register(props) {
  const [list, setList] = React.useState({
    username: "",
    password: ""
  });
  return (
    <div className="signup">
      <h1 className="heading">HACKER NEWS SIGNUP PAGE</h1>
      <Form className="picture">
        <ErrorMessage
          name="username"
          render={msg => <div className="error">{msg}</div>}
        />
        <label id="space">User Name</label>
        <Field type="text" placeholder="User Name" name="username"></Field>
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
        <input type="submit" id="point"></input>
        <p>Have an account? Login</p>
      </Form>
    </div>
  );
}
const Registration = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required(""),
    password: yup.string().required("PLEASE CHOOSE A PASSWORD")
  }),
  handleSubmit(values, tools) {
    console.log(values, tools);
    const list = tools.props.userList;
    const setList = tools.props.setUserList;
    axios
      .post("https://bw-hackernews.herokuapp.com/register", values)
      .then(response => {
        console.log(response);
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

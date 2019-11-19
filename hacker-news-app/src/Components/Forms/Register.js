import React from "react";

function Register() {
  
  return (
    <form>
      <label>
        First Name
        <input type="text" placeholder="First Name" name="firstname"></input>
      </label>
      <label>
        Last Name
        <input type="text" placeholder="Last Name" name="lastname"></input>
      </label>
      <label>
        User Name
        <input type="text" placeholder="User Name" name="username"></input>
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Choose a password"
          name="password"
        ></input>
      </label>
      <label>
        Email
        <input type="text" placeholder="Email" name="email"></input>
      </label>
      <label>
        I have agreed to the terms and conditions
        <input
          type="checkbox"
          name="terms"
        ></input>
      </label>
      <input type="submit"></input>
    </form>
  );
}

export default Register;

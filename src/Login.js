import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [number, setNum] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="number">Phone number</label>
        <input
          value={number}
          type="number"
          placeholder="9876543210"
          id="number"
          name="number"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <br />
        <label htmlFor="password">Confirm Password</label>
        <input
          value={pass}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <br />
        <button type="submit">sign in</button>
      </form>
    </div>
  );
};

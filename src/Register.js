import React, { useState } from "react";
import { Color, Palette } from "./style/color";

export const Register = (props) => {
  const [number, setNum] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          placeholder="full name"
        />
        <br />

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
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

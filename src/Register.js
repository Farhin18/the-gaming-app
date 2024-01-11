import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Color, Palette } from "./style/color";
// import { Otp } from "./otp";

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
      <h2>Varification</h2>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Full Name</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          placeholder="full name"
        /> */}
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
        {/* <Link to="/otp">
          <button>OTP</button>
        </Link> */}
        {/* <label htmlFor="password">Password</label>
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
        <button type="submit">sign up</button> */}
        <a href="/otp">
          <button type="submit">Get OTP</button>
        </a>
      </form>
    </div>
  );
};

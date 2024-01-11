import React, { Component } from "react";
import logo from "./Images/logo.png";

export default function Main() {
  return (
    <div className="container-fluid bg-black">
      <div className="text-white text-center mt-4">
        <h1>Aviator</h1>
        <hr className="text-white" />
      </div>
      <header className=" bg-dark">
        <img src={logo} height={80} width={80} alt="logo" />
      </header>
    </div>
  );
}

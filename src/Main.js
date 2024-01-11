import React, { Component } from "react";
import casino from "./Images/casino.png";

export default function Main() {
  return (
    <div className="container-fluid bg-black">
      <header className="text-white text-center mt-4">
        <h1>Cashwin</h1>
      </header>
      <hr className="text-white" />
      <section id="about" className="my-4 text-white d-flex">
        <img src={casino} height={45} width={45} alt="casino" />
        <div className="d-flex">
          <h1>/ Spribe /</h1>
          <h1>Aviator /</h1>
          <h1>Casino /</h1>
          <h1>Andar Bahar</h1>
        </div>
      </section>

      <section>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>
    </div>
  );
}

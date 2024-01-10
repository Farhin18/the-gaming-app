import React from "react";

export default function Aviator() {
  return (
    <div className="container-fluid bg-black">
      <header className="text-white text-center mt-4">
        <h1>Aviator</h1>
      </header>
      <hr className="text-white" />
      <section id="about" className="my-4 text-white d-flex">
        <img src={require("../Images/casino.png")} style={{}} />
        <p>/ Spribe /</p>
        <h6>Aviator</h6>
      </section>
      <section></section>
    </div>
  );
}

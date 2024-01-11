import React, { useState } from "react";
import logo from "./logo.svg";
import "./1App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Aviator from "./Aviator";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    // <div className="App">
    //   {currentForm === "login" ? (
    //     <Login onFormSwitch={toggleForm} />
    //   ) : (
    //     <Register onFormSwitch={toggleForm} />
    //   )}
    // </div>
    <div>
      <Aviator />
    </div>
  );
}

export default App;

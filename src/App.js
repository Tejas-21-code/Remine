import React from "react";
import Home from "../src/component/Home";
import Contact from "./component/contact";
import Director from "./component/Directors";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="main">
        <Home />
        <Director />
        <Contact />
      </div>
    </>
  );
};

export default App;

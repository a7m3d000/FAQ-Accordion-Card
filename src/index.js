/***** Basics *****/
import React from "react";
import ReactDOM from "react-dom";

/***** Libs & Frameworks *****/
import "bootstrap/dist/css/bootstrap.css";

/***** App *****/
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="bg"></div>
    <div className="container cont">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

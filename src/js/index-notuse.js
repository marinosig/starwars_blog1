//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components to your project
import Layout from "./layout-notuse";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
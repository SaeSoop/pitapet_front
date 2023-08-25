import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
// import axios from "axios";

import App from "./App/App.js";
// axios.defaults.baseURL = "http://43.202.64.233:3000/api";
// axios.defaults.withCredentials = true;


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

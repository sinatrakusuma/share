import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
import "./styles/index.scss";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

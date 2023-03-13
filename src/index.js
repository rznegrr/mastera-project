import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Store/auth-context";
import { CardProvider } from "./Store/ProductCart-Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <CardProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CardProvider>
  </AuthContextProvider>
);

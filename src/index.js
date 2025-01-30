import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "context/UserContext";
import { ProductProvider } from "context/ProductContext";
import { CategoryProvider } from "context/CategoryContext";

const ProviderComposer = ({ contexts, children }) => contexts.reduce((prev, Context) => <Context>{prev}</Context>, children);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderComposer contexts={[ ProductProvider, UserProvider, CategoryProvider]}>
      <App />
    </ProviderComposer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ProductsContext from "./context/products-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContext>
);

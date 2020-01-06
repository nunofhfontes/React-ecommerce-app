import React from "react";
import ReactDOM from "react-dom";

import ShoppingList from "./shoppingList.js";
import TopBar from "./topBar/topbar.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TopBar />

      <h1>React Example</h1>
      <h2>Create components!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

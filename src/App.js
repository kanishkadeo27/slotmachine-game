import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Slot from "./Components/Slot";

function App() {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>🎰
      </h1>

      <div className="slotmachine">
        <Slot  x = "😄" y = "😄"  z = "😄" />
        <Slot x = "😄" y = "😉"  z = "😊" />
        <Slot x = "🍎" y = "🍌"  z = "🍎" /> 
      </div>
    </>
  );
}

export default App;

import "./styles.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Greeting from "./Components/Greeting";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
    </div>
  );
}

export default App;

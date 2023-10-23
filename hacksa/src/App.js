import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [activity, setActivity] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity/");
      const data = await response.json();
      setActivity(data.activity);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h1>Feeling Bored? How about...</h1>
          <button type="button" onClick={fetchData}>
            {"Click me PLEASEEE"}
          </button>
          <p>{activity}</p>
        </div>
      </header>
    </div>
  );
}

export default App;

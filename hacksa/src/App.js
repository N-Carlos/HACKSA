import "./App.css";
import React, { useState } from "react";

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

  const getResults = async () => {
    try {
      let url = "https://www.google.com/search?q=" + activity;
      window.open(url);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <header>
        <div>
          <h1>Feeling Bored? How about...</h1>
          <button
            className="SuggestionButton"
            type="button"
            onClick={fetchData}
          >
            Click me
          </button>
          <p>{activity}</p>
          <button
            className="SuggestionButton"
            type="button"
            onClick={getResults}
          >
            Top google results
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

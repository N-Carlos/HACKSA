import "./App.css";
import React, { useState } from "react";

function App() {
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState("");
  const [price, setPrice] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity/");
      const data = await response.json();
      setActivity(data.activity);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataWithParameters = async () => {
    try {
      const response = await fetch(
        "https://www.boredapi.com/api/activity?type=" +
          type +
          "&participants=" +
          participants +
          "&price=" +
          price
      );
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

  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  };

  const closeForm = () => {
    setType(document.getElementById("type").value);
    setParticipants(document.getElementById("Participants").value);
    setPrice(document.getElementById("Price").value);
    fetchDataWithParameters();
    document.getElementById("myForm").style.display = "none";
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
          <button className="SuggestionButton" type="button" onClick={openForm}>
            Advanced Options
          </button>

          <div class="form-popup" id="myForm">
            <form action="/action_page.php" class="form-container">
              <h1>Advanced Options</h1>
              <label for="text">Type</label>
              <input
                type="text"
                placeholder="Enter Type"
                name="type"
                id="type"
              ></input>
              <label for="">Participants</label>
              <input
                type="text"
                placeholder="Enter Participants"
                name="type"
                id="Participants"
              ></input>
              <label for="">Price</label>
              <input
                type="text"
                placeholder="Enter Price"
                name="type"
                id="Price"
              ></input>
            </form>
            <button type="submit" class="btn cancel" onClick={closeForm}>
              Close
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

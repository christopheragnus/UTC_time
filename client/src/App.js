import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="form_control">
        <form action="/api" method="post">
          <div className="input_control">
            <label for="name">Device Id:</label>
            <input
              type="text"
              id="name"
              name="device_id"
              autocomplete="off"
              required
            />
          </div>

          <div className="input_control">
            <label for="time">Start Time:</label>
            <input
              type="time"
              name="time"
              id="time"
              required
              min="00:00"
              max="24:00"
              step="1"
            />
          </div>

          <div className="input_control">
            <label for="date">Start Date:</label>
            <input type="date" name="date" id="date" required />
          </div>

          <div className="input_control">
            <label for="name">Time/Date End:</label>
            <input
              type="datetime-local"
              name="datetime"
              id="datetime"
              required
              min="00:00"
              max="24:00"
              step="1"
            />
          </div>

          <div className="input_control">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

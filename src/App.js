import React, { Component } from "react";
import "./App.css";
import StaffList from "../src/Components/StaffListComponent"; // không dùng  {} vì StaffList là 1 component
class App extends Component {
  render() {
    return (
      <div className="App">
        <StaffList />
      </div>
    );
  }
}

export default App;

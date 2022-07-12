import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import { STAFFS } from "./shared/staffs.jsx"; // dùng {} khi nó là 1 giá trị không phải là component
import StaffList from "../src/Components/StaffListComponent"; // không dùng  {} vì StaffList là 1 component

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: 3,
    };
    this.updateInput = this.updateInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ input: event.target.value });
    console.log("Your input value is: " + this.state.input);
  }

  // handleSubmit() {
  //   console.log("Your input value is: " + this.state.input);
  //   //Send state to the server code
  // }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự</NavbarBrand>
          </div>
        </Navbar>
        <br></br>
        <div className="container">
          {/* <input
            type="text"
            onChange={this.updateInput}
            placeholder="nhập số cột"
          ></input> */}
          <label htmlFor="col">
            Chọn số cột hiển thị trên màn hình Desktop :{" "}
          </label>
          <select name="col" onChange={this.updateInput} defaultValue="3">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="12">12</option>
          </select>
          {/* <input
            type="submit"
            onClick={this.handleSubmit}
            value="Confirm"
          ></input> */}
        </div>
        <br></br>
        <div className="container">
          <StaffList nhanvien={STAFFS} column={this.state.input} />
        </div>
      </div>
    );
  }
}

export default App;

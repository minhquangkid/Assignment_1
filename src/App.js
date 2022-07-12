import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import { STAFFS } from "./shared/staffs.jsx"; // dùng {} khi nó là 1 giá trị không phải là component
import StaffList from "../src/Components/StaffListComponent"; // không dùng  {} vì StaffList là 1 component
class App extends Component {
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
          <StaffList nhanvien={STAFFS} />
        </div>
      </div>
    );
  }
}

export default App;

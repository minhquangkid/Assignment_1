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
    // this.change = this.updateInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ input: event.target.value });
    console.log("Your input value is: " + this.state.input);
  }
  // gán cho giá trị mới của state là giá trị của e truyền vào

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
          <label htmlFor="col" style={{ fontSize: "1.5rem" }}>
            Chọn số cột hiển thị trên màn hình Desktop :
          </label>
          <select
            name="col"
            onChange={(e) => this.updateInput(e)}
            // onChange={this.change} nếu muốn tách riêng hàm ra ngoài thì mở comment này và ở trên
            defaultValue="3"
            style={{ padding: "5px" }}
          >
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
// khi thay đổi giá trị trên select box thì giá trị mới là e sẽ được truyền vào hàm updateInput của class này thông qua event onchange
// ở StaffList tạo ra 2 thuộc tính mới cho props là nhanvien và column để StaffListComponent có thể chạy được

export default App;

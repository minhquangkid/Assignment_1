"use strict";
import React, { Component } from "react"; // phải có dòng này mới dùng các component được

//console.log(STAFFS);
function StaffList(props) {
  const mystyle = {
    boxSizing: "border-box",
    boderSize: "0.5px",
    borderStyle: "solid",
    margin: "5px 1px",
    padding: "5px",
  };
  const list = props.nhanvien.map((e) => {
    return (
      <div className="col-12 col-md-6 col-lg-4" style={mystyle}>
        {e.name}
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="row">
        {/* <p>{STAFFS[0].name}</p> */}
        {list}
      </div>
      <div></div>
    </React.Fragment>
  );
}

export default StaffList;
// phải tạo trong thư mục là thư mục con của src thì React mới hoạt động được
// tất cả dữ liệu API bên ngoài mà muốn đưa vào sử dụng như staffs.jsx đều phải nhét trong thư mục con của src thì React mới hoạt động được (ví dụ như thư mục shared ở đây)

"use strict";
import React, { Component } from "react"; // phải có dòng này mới dùng các component được
import { useState } from "react";

//console.log(STAFFS);
function StaffList(props) {
  const [selected, setSelected] = useState(null);

  const renderTable = function (select) {
    if (select != null) {
      return (
        <div className="col-12 col-md-6 col-lg-4">
          <div style={mystyle}>
            <h4>Họ và tên : {select.name}</h4>
            <p>Ngày sinh : {select.doB}</p>
            <p>Ngày vào công ty : {select.startDate}</p>
            <p>Phòng ban : {select.department.name}</p>
            <p>Số ngày nghỉ còn lại : {select.annualLeave}</p>
            <p>Số ngày đã làm thêm : {select.overTime}</p>
          </div>
        </div>
      );
    } else {
      return <p>Bấm vào tên nhân viên để xem thông tin</p>;
    }
  };

  const mystyle = {
    boxSizing: "border-box",
    boderSize: "0.5px",
    borderStyle: "solid",
    borderRadius: "5px",
    // margin: "5px 5px",
    padding: "5px",
  };
  const list = props.nhanvien.map((e) => {
    return (
      <div className="col-12 col-md-6 col-lg-4">
        <p onClick={() => setSelected(e)} style={mystyle}>
          {e.name}
        </p>
      </div>
    );
  });
  // phải để e.name trong tag <p></p> vì nếu để trực tiếp ở trong div thì các border sẽ dính vào nhau
  return (
    <React.Fragment>
      <div className="row">{list}</div>
      <div className="row">{renderTable(selected)}</div>
    </React.Fragment>
  );
}

export default StaffList;
// phải tạo trong thư mục là thư mục con của src thì React mới hoạt động được
// tất cả dữ liệu API bên ngoài mà muốn đưa vào sử dụng như staffs.jsx đều phải nhét trong thư mục con của src thì React mới hoạt động được (ví dụ như thư mục shared ở đây)

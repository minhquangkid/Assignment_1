"use strict";
import React, { Component } from "react"; // phải có dòng này mới dùng các component được
import { useState } from "react"; // dùng để dùng Hook
import dateFormat, { masks } from "dateformat";
//console.log(STAFFS);

function StaffList(props) {
  const [selected, setSelected] = useState(null); //dùng hook, tạo biến state giống bên class là selected, và hàm để thay đổi nó là setSelected, khởi tạo giá trị ban đầu của selected là null

  const transform = function (day) {
    let a = String(new Date(day)); // phải đưa về định dạng của new Day trước rồi mới dùng dateFormat được (xem trong hướng dẫn của dateFormat)
    return dateFormat(a, "dd/mm/yyyy");
  };

  const renderTable = function (select) {
    if (select != null) {
      return (
        <div className="col-12 col-md-6 col-lg-4">
          <div style={mystyle}>
            <h4>Họ và tên : {select.name}</h4>
            <p>Ngày sinh : {transform(select.doB)}</p>
            <p>Ngày vào công ty : {transform(select.startDate)}</p>
            <p>Phòng ban : {select.department.name}</p>
            <p>Số ngày nghỉ còn lại : {select.annualLeave}</p>
            <p>Số ngày đã làm thêm : {select.overTime}</p>
          </div>
        </div>
      );
    } else {
      return <h4>Bấm vào tên nhân viên để xem thông tin</h4>;
    }
  }; // mặc dù chưa import DEPARTMENTS nhưng nó vẫn sài được do có sự liên kết với STAFFS

  const mystyle = {
    boxSizing: "border-box",
    boderSize: "0.5px",
    borderStyle: "solid",
    borderRadius: "5px",
    // margin: "5px 5px",
    padding: "5px",
  };

  // hàm tính toán để hiển thị số cột theo yêu cầu
  const tinhtoan = function (num) {
    let a = 12 / Number(num);
    return `col-12 col-md-6 col-lg-${a}`;
  };

  const list = props.nhanvien.map((e) => {
    return (
      <div className={tinhtoan(props.column)}>
        <p onClick={() => setSelected(e)} style={mystyle}>
          {e.name}
        </p>
      </div>
    );
  });
  // hàm setSelected sẽ gán giá trị truyền vào e cho state là selected (tương đương câu lệnh selected = e)
  // phải để e.name trong tag <p></p> vì nếu để trực tiếp ở trong div thì các border sẽ dính vào nhau
  return (
    <React.Fragment>
      <div className="row" style={{ backgroundColor: "pink" }}>
        {list}
      </div>
      <div
        className="row justify-content-center"
        style={{ backgroundColor: "yellow" }}
      >
        {renderTable(selected)}
      </div>
    </React.Fragment>
  );
}
// state là selected sẽ cập nhật lại mỗi khi có sự kiện tác động vào nó (xem lại định nghĩa của nó trên google cho chắc :))

export default StaffList;
// phải tạo trong thư mục là thư mục con của src thì React mới hoạt động được
// tất cả dữ liệu API bên ngoài mà muốn đưa vào sử dụng như staffs.jsx đều phải nhét trong thư mục con của src thì React mới hoạt động được (ví dụ như thư mục shared ở đây)

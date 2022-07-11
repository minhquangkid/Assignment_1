"use strict";
import React, { Component } from "react"; // phải có dòng này mới dùng các component được
import { STAFFS } from "../shared/staffs.jsx"; // dùng {} khi nó là 1 giá trị không phải là component

//console.log(STAFFS);
function StaffList() {
  return <p>{STAFFS[0].name}</p>;
}

export default StaffList;

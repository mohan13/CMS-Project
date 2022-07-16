import React from "react";
import {
  FaRegUser,
  FaBars,
  FaPhoneAlt,
  FaGooglePlusSquare,
} from "react-icons/fa";
// import Sidebar from "../Sidebar/sidbar";
import { Link,useLocation } from "react-router-dom";
import Icon from "../../Ui/icon";
const Toolbar = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className="grid ">
      <div className="my-2">
        <div className=" bg-red-400 flex justify-end items-center text-white p-1">
          <FaPhoneAlt />
          <p className="mx-2"> 9876543210</p>
          <FaGooglePlusSquare className="h-5 w-5 ml-4" />
          <p className="flex ml-4 mx-2">username@gmail.com</p>
        </div>
        <div className="flex  items-center  justify-between">
          <Icon headerIcon={<FaBars className="w-full h-full" />} />
          <div className="text-2xl font-bolder">Logo</div>
          <Icon headerIcon={<FaRegUser className="w-full h-full" />} />
        </div>
      </div>
      <div className="text-left text-md">{location.pathname}</div>
    </div>
  );
};

export default Toolbar;

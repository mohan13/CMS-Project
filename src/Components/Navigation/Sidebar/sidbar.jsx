import React from "react";
// import { FaRegUser, FaBars } from "react-icons/fa";
import { NavData } from "../NavData";
import { Link } from "react-router-dom";

const sidbar = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 h-screen  ">
        {NavData?.map((val, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundColor: (0, 0, 0, 0.4),
              }}
              className="text-xl mx-2 flex justify-items-start items-center "
            >
              <Link to={val.path} className="flex jusfitfy-start items-center">
                <div className="mr-2">{val.icon}</div>
                <div className=" py-2 ease-out duration-200 hover:border-b-2 hover:border-pink-600 hover:cursor-pointer">
                  {val.title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <div className="bg-pink-300  ">
        <div className="h-4 bg-red-500"></div>
        <div className="flex  items-center  justify-between">
          <FaBars />
          <h2>Logo</h2>
          <FaRegUser />
        </div>
      </div> */}
    </div>
  );
};

export default sidbar;

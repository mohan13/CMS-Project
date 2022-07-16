import React from "react";
// import { FaRegUser, FaBars } from "react-icons/fa";
import { NavData } from "../NavData";
import { Link} from "react-router-dom";

const Sidbar = () => {
  
  
  return (
      <div className="flex flex-col justify-center bg-stone-200 gap-10 h-screen">
        {NavData?.map((val, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundColor: (0, 0, 0, 0.4),
              }}
              className="text-lg px-4 flex justify-items-start items-center "
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
  );
};

export default Sidbar;

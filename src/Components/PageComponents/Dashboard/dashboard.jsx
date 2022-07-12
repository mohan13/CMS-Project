import React from "react";
import { TableData } from "./Table/tableData";
import {motion} from 'framer-motion'
const Dashboard = () => {
  return (
    <motion.div
    initial={{width:'0'}}
    animate={{ width:"100% "}}
    exit={{x:window.innerWidth, transitin:{duration: 0.3} }}div className="bg-red-400 flex flex-col">
      {TableData?.map((val, i) => {
        return (
          <div key={i}>
            <table className=" w-full  ">
              <tr className="text-center grid grid-cols-5 gap-4 border-2 w-full">
                <td>{val.sn}</td>
                <td>{val.fullName}</td>
                <td>{val.phone}</td>
                <td>{val.email}</td>
                <td>{val.address}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Dashboard;

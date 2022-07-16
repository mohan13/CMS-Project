import React from "react";
// import { TableData } from "./Table/tableData";
import { motion } from "framer-motion";
import TestContextProvider, {
  TestContext,
} from "../../../HOC/Context API/Context";
const Dashboard = () => {
  return (
    <TestContextProvider>
      <TestContext>
        {({ Students, Users }) => {
          console.log(Students);
          return (
            <motion.div
              initial={{ width: "0" }}
              animate={{ width: "100% " }}
              exit={{ x: window.innerWidth, transitin: { duration: 0.2 } }}
              div
              className="flex flex-col"
            >
              <tr className="text-center w-full flex mx-auto  items-center">
                <td className="w-16 bg-red-300">S.N</td>
                <td className="w-60 bg-green-200 ">Name</td>
                {/* <td>{val.phone}</td> */}
                <td className="w-60 bg-blue-300">Email</td>
                <td className="bg-pink-200 w-48">Address</td>
                <td className="bg-pink-500 w-32">Action</td>
              </tr>
              {/* {Students?.map((val, i) => {
                return (
                  <div key={i}>
                    <table className="grid">
                      <thead></thead>
                      <tr className="text-center w-full flex  items-center">
                        <td className="w-16 bg-red-300">{val.sn}</td>
                        <td className="w-60 bg-green-200 ">{val.fullName}</td>
                        <td>{val.phone}</td>
                        <td className="w-60 bg-blue-300">{val.email}</td>
                        <td className="bg-pink-200 w-48">{val.address}</td>
                        <td className="flex justify-evenly w-32">
                          <button className="bg-green-400  rounded-sm ">
                            Edit{" "}
                          </button>
                          <button className="bg-red-400 rounded-sm">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                );
              })} */}
              {Users.map((user) => {
                return (
                  <div>
                    <table className="grid">
                      <thead></thead>
                      <tr className="text-center w-full flex  items-center">
                        <td className="w-16 bg-red-300">{user.sn}</td>
                        <td className="w-60 bg-green-200 ">{user.Name}</td>
                        {/* <td>{val.phone}</td> */}
                        <td className="w-60 bg-blue-300">{user.email}</td>
                        <td className="bg-pink-200 w-48">{user.address}</td>
                        <td className="flex justify-evenly w-32">
                          <button className="bg-green-400  rounded-sm ">
                            Edit{" "}
                          </button>
                          <button className="bg-red-400 rounded-sm">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                );
              })}
            </motion.div>
          );
        }}
      </TestContext>
    </TestContextProvider>
  );
};

export default Dashboard;

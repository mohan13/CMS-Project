import React from "react";
import Sidebar from "../Components/Navigation/Sidebar/sidbar";
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
const Layout = (props) => {
  return (
    <div>
      <div className="flex w-full">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <Toolbar />
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

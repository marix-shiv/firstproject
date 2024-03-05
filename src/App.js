import React from "react";
import { Outlet } from "react-router-dom";
import Navs from "./Navs";

const App = () => {
  return (
    <div>
      <Navs />
      <Outlet />
    </div>
  );
};

export default App;

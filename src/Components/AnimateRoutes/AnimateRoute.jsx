import React from "react";
import Home from "../pages/Home/Home";
import Dashboard from "../PageComponents/Dashboard/dashboard";
import Form1 from "../PageComponents/Form/forForm";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const Animateroute = () => {
  const location = useLocation();
  return (
    <div>
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form1/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/" element={<Dashboard/>}/> */}
      </Routes>
    </AnimatePresence>
    </div>
  );
};

export default Animateroute;

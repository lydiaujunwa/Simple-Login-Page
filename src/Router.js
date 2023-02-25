import React from "react";
import {Route, Routes} from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="*" element ={<NotFound/>} />
      </Routes>
      </div>
  );
};

export default Router;
import React from "react";
import {Route, Routes} from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Link } from "react-router-dom";

const Router = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container">
        <Link className="navbar-brand" to="/">
            Jumbotron example
        </Link>
        <button 
        className="navbar-toggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse justify-content-center"
        id="collapsibleNavbar"
        >
            <ul className="navbar-nav gap-3">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">
                       Contact Us
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="Login">
                       Login
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="create">
                       Register Here
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Register/>}/>
        <Route path="*" element ={<NotFound/>} />
      </Routes>
      </div>
  );
};

export default Router;
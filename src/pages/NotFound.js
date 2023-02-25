import React from "react";
import { Link } from "react-router-dom";

const NotFound = () =>{
  return(
    <div className="container">
        <div className="row">
        <div className=" col-12 col-md-6 mt-5 mx-auto">
     <h1 className="text-center" style={{color: "purple", fontSize: "200px"}}>Oops!</h1>
     <div className="text-center" style={{fontSize: "40px"}}>404 - PAGE NOT FOUND</div>
     <p  className="text-center" style={{fontSize: "20px"}}>
        The page you are looking for might have been removed
        had its name changes or is temporarily unavailable
     </p>
     <div className="text-center">
    <p> <Link to ="/"> <button className="btn bg-info">Back to home page</button> </Link> </p>
    </div>
  </div>
        </div>
    </div>
  );
};
export default NotFound;
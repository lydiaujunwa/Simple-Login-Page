import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () =>{
  return(
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 mx-auto">
    <div className="text-center" style={{fontSize:"300px", color: "skyblue"}}>
    <i class="fab fa-react"></i>
       </div>
       <h1 className="text-center" style={{fontSize:"100px"}}>REACT JS</h1>
    <div className="text-center py-5">
    <Link to= "/"><button className="btn bg-info">Back to Home Page</button></Link>
  </div>
  <div className="text-center py-5">
    <Link to= "/contact-us"><button className="btn bg-info">Go to Contact Page</button></Link>
  </div>
            </div>
        </div>
    </div>
  );
};
export default AboutUs;
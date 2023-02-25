import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () =>{
    const [submit, onSubmit] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState({emailError: "", nameError: ""});
    const [users, setUser] = useState([])

    const submitHandler = () => {
        if (!name) return setError({...error, nameError: "name is required"});
        if(!email) return setError({...error, emailError: "email is required"});
     const user = {email: email, name};
     setUser([...users, user]);
     console.log(users)
    }
  return(
    <div className="container">
        <div className="row">
        <div className=" col-12 col-md-6 mt-5 mx-auto">
    <div className="text-center" style={{fontSize:"40px"}}>Contact Us Form</div>
    <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label" htmlFor="name">Name:</label>
            <input
            value={name}
            type="name"
            className="form-control"
            id="name"
            name="name"
            onChange={(event) => setName(event.target.value)}
            onKeyDown = {(e)=> e.target.value && setError({...error, nameError: ""})}
            />
            {error.nameError === "" && (<small className="text-danger">{error.nameError}</small>)}
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="email">Email:</label>
            <input 
            value={email}
            type="email"
            className="form-control" 
            id="email" 
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            onKeyDown = {(e)=> e.target.value && setError({...error, nameError: ""})}
            />
             {error.emailError === "" && (<small className="text-danger">{error.emailError}</small>)}
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="message">Message:</label>
            <textarea className="form-control" id="message" required/>
        </div>
        <button 
         value={submit}
         type="submit" 
         onClick={submitHandler} 
         className="btn btn-danger"
         onChange={(event) => onSubmit(event.target.value)}
        >Submit</button>
    </form>
    <div className="text-center py-5">
    <Link to= "/"><button className="btn bg-info">Back to Home Page</button></Link>
  </div>
  <div className="text-center py-5">
    <Link to= "/about-us"><button className="btn bg-info">Back to About Page</button></Link>
  </div>
  </div>
        </div>
    </div>
  );
};
export default ContactUs;
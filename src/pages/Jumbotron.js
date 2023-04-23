import React, { useState } from "react";


const Jumbotron = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({emailError: "", pwsError: ""});
  const [users, setUser] = useState([]);

  const submitHandler = () => {
    if (!email) return setError({...error, emailError: "Email is required"});
    if (password === "") return setError({...error, pwsError: "Password is required"});
    const user = {email: email, password};
    setUser([...users, user]);
    console.log(users);
    setEmail("")
    setPassword("")
  };

return(

<div>
    
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto mt-5 p-5 bg-info landing-box">
                <h1>Custom Jumbotron</h1>
                <p className="font-size-24 col-12 col-md-7 my-4">
                    Using a series of utilities, you can create this jumbotron, just<br/>
                    like the one in previous versions of Bootstrap. Check out the<br/>
                    examples below for how you can remix ans restyle it to your<br/>
                    liking.
                </p>
                <p>
                    <button 
                    type="button"
                    onClick={submitHandler}
                    className="btn btn-primary btn-lg">
                        Example Button
                        </button>
                </p>
            </div>
        </div>
    </div>
</div>
);
};
export default Jumbotron;
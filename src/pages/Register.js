import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
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

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "120px" }}>
        <div className="col-12 col-md-6 mx-auto">
          <form action="/action_page.php">
            <h4 className="text-center">Log In </h4>
            
            <div className="mb-3 mt-3">
            <InputForm 
                label="Email" 
                value={email} 
                type="email"
                onChange={(event) => setEmail(event.target.value)}/>
            </div>
            
            <div className="mb-3 mt-3">
                <InputForm 
                label="FirstName" 
                value={FirstName} 
                type="text"
                onChange={(event) => setFirstName(event.target.value)}/>
            </div>
           
            <div className="mb-3 mt-3">
                <InputForm 
                label="LasttName" 
                value={LastName} 
                type="text"
                onChange={(event) => setLastName(event.target.value)}/>
            </div>
          
            <div className="mb-3">
                <InputForm 
                label="Password" 
                value={password} 
                type="Password"
                onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Remember me
              </label>
            </div>
            <button
              type="button"
              onClick={submitHandler}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="py-5">
        <Link to= "/about-us"><button className="btn bg-info">Go to About Page</button></Link>
      </div>

      <div className="row mt-4">
        <div className="col-6 mx-auto">
          {users.map((uju, index)=>(
          <h5 
          key={index}
          style={{border: "2px solid red",
          marginBottom: "20px",
          padding: "10px",
          }}>
            {" "}
            <strong>{uju.email}:</strong>
            {uju.password}
          </h5>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
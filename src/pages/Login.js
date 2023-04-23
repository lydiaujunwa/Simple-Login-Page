import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "120px" }}>
        <div className="col-12 col-md-6 mx-auto">
          <form action="/action_page.php">
            <h4 className="text-center">Log In </h4>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                value={email}
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                onKeyDown = {(e) => e.target.value && setError({...error, emailError: ""})}
                onChange={(event) => setEmail(event.target.value)}
              />
              {error.emailError !== "" && (<small className="text-danger">{error.emailError}</small>)}

            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Password:
              </label>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                onKeyDown = {(e) => e.target.value && setError({...error, pwdError: ""})}
              />
              {error.pwdError !== "" && (<small className="text-danger">{error.pwsError}</small>)}
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

export default Login;
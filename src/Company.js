import {useState} from "react";
import pansImages from "./Images/paris.jpg"
import newImages from "./Images/newyork.jpg"
import sanImages from "./Images/sanfran.jpg"
import mapImages from "./Images/map.jpg"
const Company = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const[comments, setComments] = useState("")
    const[submit, setSubmit] = useState("")
    const submitHandler =()=>{
        if(!email) return console.log("Email is required");
        if(!name) return console.log("Name is required");
        if(!comments) return console.log("comment is required")
    }
    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark navbar-fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#myPage">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav navbar-right">
        <li className="nav-item">
          <a className="nav-link" href="#about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">PRICING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="row">
    <div className="col-12 text-center mb-4 head">
        <h1>Company</h1>
        <p>We specialize in blablabla</p>
        <form className="form-inline">
            <div className="form-group">
                <input
                value={email}
                type="email"
                className="form-control"
                id="email"
                placeholder="Email Address"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                />
                <div className="input-group-btn">
                    <button
                    value={submit}
                    type="button" 
                    onClick={submitHandler} 
                    className="btn btn-danger"
                    onChange={(event) => setSubmit(event.target.value)}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
<div className="row  p-5 mb-4">
    <div className="col-12 col-md-6">
        <h2 className="about-title">About Company Page</h2>
        <p className="about-text-1">
            Lorem ipsum dolor sit amet, consectetur adipiscusing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="about-text-2">
            Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nistrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
        <button className="btn btn-lg  btn-outline-dark text-dark">Get in Touch</button>
    </div>
    <div className="col-12 col-md-6">
        <span className="glyphicon logo"> <i className="fas fa-signal"></i></span>
    </div>
</div>
<div className="row p-5 mb-4 ">
    <div className="col-12 col-md-6">
    <span className="glyphicon logo"> <i className="fas fa-globe-americas"></i></span>
    </div>
    <div className="col-12 col-md-6">
    <h2 className="about-title">OUR VALUES</h2>
    <h3>
        <strong>MISSION:</strong>
        Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
    </h3>
    <p>
        <strong>VISION:</strong>
        Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem 
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    </div>
</div>
<div className="row p-5 mb-4 ">
    <div className="col-12 mt-5">
        <h2 className="text-center">SERVICES</h2>
        <h4 className="text-center">What we offer</h4>
    </div>
</div>
<div className="row p-5 mb-4 ">
    <div className="col-12 col-md-4 text-center">
    <span className="logo-small"><i className="fas fa-power-off"></i></span>
        <h4>POWER</h4>
        <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-12 col-md-4 text-center">
    <span className="logo-small"><i className="fas fa-heart"></i></span>
        <h4>LOVE</h4>
        <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-12 col-md-4 text-center">
    <span className="logo-small"><i className="fas fa-lock"></i></span>
        <h4>JOB DONE</h4>
        <p>Lorem ipsum dolor sit amet..</p>
    </div>
</div>
<div className="row p-5 mb-4 ">
    <div className="col-12 col-md-4 text-center">
    <span className="logo-small"><i className="fas fa-leaf"></i></span>
        <h4>GREEN</h4>
        <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-12 col-md-4 text-center">
    <span className="logo-small"><i className="fas fa-certificate"></i></span>
        <h4>CERTIFIED</h4>
        <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-12 col-md-4 text-center">
    <span className="logo-small"><i className="fas fa-wrench"></i></span>
        <h4>HARD WORK</h4>
        <p>Lorem ipsum dolor sit amet..</p>
    </div>
</div>
<div className="row">
    <div className="col-12 p-5 mb-4 bg-grey ">
        <h2 className="text-center">PORTFOLIO</h2>
        <h4 className="text-center mt-5 mb-4">What we have created</h4>
        <div className="row text-center">
            <div className="col-12 col-md-4">
                <div className="house">
                    <img src={pansImages} alt="Paris"/>
                    <div className="bg-light p-2">
                    <h5>Paris</h5>
                    <p>Yes, we built Paris</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="house">
            <img src={newImages} alt="New York"/>
            <div className="bg-light p-2">
            <h5>New York</h5>
            <p>We built New York</p>
            </div>
            </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="house">
            <img src={sanImages} alt="San Francisco"/>
            <div className="bg-light p-2">
            <h5>San Francisco</h5>
            <p>Yes, San Fran is ours</p>
            </div>
            </div>
            </div>
        </div>
        <div className="col-12 mb-4">
        <h2 className="text-center mt-5">WHAT OUR CUSTOMERS SAY</h2>
        <div id="demo" className="carousel slide text-center" data-bs-ride="carousel">
            {/* Indicators/dot */}
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            {/* The slideshow/carousel */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <h4>This company is the best. I am so happy with the result!</h4>
                    <span>Michael Roe, Vice President, Comment Box</span>
                </div>
                <div className="carousel-item active">
                    <h4>One word... WOW!</h4>
                    <span>John Doe, Salesman, Rep Inc</span>
                </div>
                <div className="carousel-item active">
                    <h4>Could I... Be any more happy with this company</h4>
                    <span>Chandler Bing, Actor, FriendsAlot</span>
                </div>
            </div>
            {/* Left and right controls/icons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </button>
           <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
           </button>
        </div>
        </div>
    </div>
    <div className="row">
            <div className="col-12 p-5 mb-4 text-center">
                <h2>PRICING</h2>
                <h4>Choose a payment plan that works for you</h4>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-12 col-md-4">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <h1>Basic</h1>
                    </div>
                    <div className="panel-body">
                        <p><strong>20</strong> Lorem</p>
                        <p><strong>15</strong> Ipsum</p>
                        <p><strong>5</strong> Dolor</p>
                        <p><strong>2</strong> Sit</p>
                        <p><strong>Endless</strong> Amet</p>
                    </div>
                    <div className="panel-footer">
                        <h3>$19</h3>
                        <h4>per month</h4>
                        <button className="btn btn-lg">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
            <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <h1>Pro</h1>
                    </div>
                    <div className="panel-body">
                        <p><strong>50</strong> Lorem</p>
                        <p><strong>25</strong> Ipsum</p>
                        <p><strong>10</strong> Dolor</p>
                        <p><strong>5</strong> Sit</p>
                        <p><strong>Endless</strong> Amet</p>
                    </div>
                    <div className="panel-footer">
                        <h3>$29</h3>
                        <h4>per month</h4>
                        <button className="btn btn-lg">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
            <div className="panel panel-default text-center">
                    <div className="panel-heading">
                        <h1>Premium</h1>
                    </div>
                    <div className="panel-body">
                        <p><strong>100</strong> Lorem</p>
                        <p><strong>50</strong> Ipsum</p>
                        <p><strong>25</strong> Dolor</p>
                        <p><strong>10</strong> Sit</p>
                        <p><strong>Endless</strong> Amet</p>
                    </div>
                    <div className="panel-footer">
                        <h3>$49</h3>
                        <h4>per month</h4>
                        <button className="btn btn-lg">Sign Up</button>
                    </div>
                </div>
            </div>
            
        </div>
</div>
<div className="row">
    <div className="col-12 p-5 mt-5 mb-4 bg-grey">
        <h2 className="text-center">CONTACT</h2>
        <div className="row">
            <div className="col-12 p-5 mb-4">
                <p>Contact us and we'll get back to you within 24 hours.</p>
                <p><span className="map-marker"><i class="fas fa-map-marker-alt"></i>Chicago, US</span></p>
                <p><span className="map-marker"><i class="fas fa-mobile-alt"></i>+00 15151515151</span></p>
                <p><span className="map-marker"><i class="fas fa-envelope"></i>myemail@something.com</span></p>
            </div>
          <div className="row">
          <div className="col-12">
            <div className="col-12 col-md-4 form-control mb-5">
            <input
                value={name}
                type="text"
                className="form-control"
                id="name"
                placeholder="name"
                name="name"
                onChange={(event) => setName(event.target.value)}
                />
                {/* <input className="form" id="name" name="name" placeholder="name" type={text} required/> */}
            </div>
            <div className="col-12 col-md-4 form-control mb-5">
            <input
                value={email}
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                />
                </div>
                <div className="col-12 col-md-4 text form-control mb-5">
            <input
                value={comments}
                type="comments"
                className="form-control"
                id="comments"
                placeholder="comments"
                name="comments"
                onChange={(event) => setComments(event.target.value)}
                />
                </div>
          </div>
          <div className="row">
            <div className="col-12">
                <button className="btn btn-default pull-right" type="submit">Send</button>
            </div>
          </div>
          </div>
        </div>
    </div>
    <div className="road-map mb-5">
    <img src={mapImages} alt="Map"/>
    </div>
    <div className="row">
        <div className="col-12 text-center">
            <a href="#myPage" title="To Top">
                <span className="icon-up"><i class="fas fa-chevron-up"></i></span>
            </a>
            <p>
                Bootstrap Theme Made By
                <a href="https://www.w3schools.com" title="visit w3schools"> www.w3schools.com</a>
            </p>
        </div>
    </div>
</div>
</div>
    );
};

export default Company;
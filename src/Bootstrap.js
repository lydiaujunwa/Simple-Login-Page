import React from "react";

const Bootstrap = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center text-white p-5 bg-primary">
                    <h1>My First Bootstrap 5 Page</h1>
                    <p>Resize this reponsive page to see the effect!</p>
                </div>
                <nav className="navbar-main navbar-expand-sm bg-dark">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </nav>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <h2>About Me</h2>
                        <h3>Photo of Me:</h3>
                        <div className="No-Img">Fake Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim...</p>
                        
                    </div>
                    <div className="col-md-8">
                    <h2>TITLE HEADING</h2>
                        <h3>Title description, Dec 7, 2020</h3>
                        <div className="No-Img">Fake Image</div>
                        <p>Some text...</p>
                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                    </div>
                </div>

                    <div className="row">
                        <div className="col-md-4">
                        <h4 className="mt-4">Some Links</h4>
                       <p>Lorem ipsum dolor sit ame.</p>
                        <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                       </ul>
                        </div>
                        <div className="col-md-8">
                        <h2 className="mt-5">TITLE HEADING</h2>
                        <h3>Title description, Sep 2, 2020</h3>
                        <div className="No-Img">Fake Image</div>
                        <p>Some text...</p>

                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        </div>
                    </div>

            
                <div className=" mt-5 p-4 bg-dark text-white text-center">
                    <p>Footer</p>
                </div>
            </div>
        </div>

    );
};

export default Bootstrap;
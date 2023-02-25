function About() {
    return(
        <div>
            <div className="container py-4">
            <header className="pb-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center text-dark text-decoration-none"/> 
                    <p className="icon"><i class="fab fa-bootstrap"></i> Jumbotron example</p>
                </header>
                <div className="row">
                    <div className="col-12 col-md-6 bg-light p-5 mb-4">
                        <h1 className="title">Custom Jumbotron</h1>
                        <p className="fs-4">
                            Using a series of utilities, you can create this jumbotron, just<br/>
                            like the one in previous versions of Bootstrap. Check out the<br/>
                            examples below for how you can remix ans restyle it to your<br/>
                            liking.
                        </p>
                        <button className="btn btn-primary btn-lg"
                        style={{width: "fit-content"}}
                        > Example button</button>
                    </div>
                        <div className="row align-items-md-stretch">
                            <div className="col-12 col-md-6">
                                    <div className="h-200 p-5 bg-dark text-white">
                                        <h2>Change the background</h2>
                                        <p>
                                            Swap the background-color utility and add a .`.text-*` color
                                            utility to mix up the jumbotron look. Then, mix and match width
                                            aditional component themes and more.
                                        </p>
                                    <button className="btn btn-lg btn-outline-light text-white"
                                        style={{width: "fit-content"}}
                                    > Example button</button>
                                    </div>
                            </div>
                            <div className="col-12 col-md-6">
                                    <div className="h-200 p-5 bg-light text-dark">
                                        <h2>Add border</h2>
                                        <p>
                                            Or, keep it light and add a border for some added definition to the boundaries of your content.
                                            Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing
                                            of both column's content for equal-height.
                                        </p>
                                <button className="btn btn-lg btn-outline-dark text-dark" style={{width: "fit-content"}}> Example button</button>
                            </div>
                        </div>
                    </div>
                    <footer className="pt-3 mt-4 text-muted border-top"> (C) 2022 </footer>
                </div>
            </div>
        </div>
    );
};
export default About;
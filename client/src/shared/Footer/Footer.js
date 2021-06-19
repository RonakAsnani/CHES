import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer" style={{ backgroundColor: "#023047" }}>
            <div style={{textAlign: "center"}} className="container">
                <div className="row pt-5 pb-5 justify-content-between">
                    <div className="col-md-4 col-sm-6">
                        <Link to="/about" className="mb-4">ABOUT US</Link>
                        <p style={{ color: "white" }}>Copyright &copy; All rights reserved Chemical Engineering Society,
                            SVNIT Surat</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="google.com">AICHE</a>
                        <p style={{ color: "white" }}>ChES, SVNIT holds an affiliation with American Institute of Chemical Engineers</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h4 style={{ color: "white" }}>Contact Us</h4>
                        <ul className="list-inline">
                            <li className="list-inline-item pr-2">
                                <a href="insta"><i className="fa fa-instagram text-white"></i></a>
                            </li>
                            <li className="list-inline-item pr-2">
                                <a href="insta"><i className="fa fa-linkedin text-white"></i></a>
                            </li>
                            <li className="list-inline-item pr-2">
                                <a href="insta"><i className="fa fa-youtube text-white"></i></a>
                            </li>
                            <li className="list-inline-item pr-2">
                                <a href="insta"><i className="fa fa-twitter text-white"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

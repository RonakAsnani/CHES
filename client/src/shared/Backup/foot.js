import React from "react";
import { Link } from "react-router-dom";

function foot() {
  return (
    <footer className="footer" style={{ backgroundColor: "#1D3334" }}>
      <div style={{ textAlign: "center" }} className="container">
        <div className="row pt-5 pb-5 justify-content-between">
          <div className="col-md-4 col-sm-6">
            <Link style={{ color: "#E9C46A" }} to="/about" className="mb-4">
              ABOUT US
            </Link>
            <p style={{ color: "white" }}>
              Copyright &copy; All rights reserved Chemical Engineering Society,
              SVNIT Surat
            </p>
          </div>
          <div className="col-md-4 col-sm-6">
            <a
              target="_blank"
              style={{ color: "#E9C46A" }}
              href="https://www.aiche.org/"
            >
              AICHE
            </a>
            <p style={{ color: "white" }}>
              ChES, SVNIT holds an affiliation with American Institute of
              Chemical Engineers
            </p>
          </div>
          <div className="col-md-4 col-sm-6">
            <a style={{ color: "#E9C46A" }}>CONTACT US</a>
            <ul className="list-inline">
              <li className="list-inline-item pr-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/ches_svnit_aiche/?hl=en"
                >
                  <i className="fa fa-instagram text-white"></i>
                </a>
              </li>
              <li className="list-inline-item pr-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/chemical-engineering-society-svnit/?viewAsMember=true"
                >
                  <i className="fa fa-linkedin text-white"></i>
                </a>
              </li>
              <li className="list-inline-item pr-2">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCdRZ6R7sBns_mx-nNixWyfg"
                >
                  <i className="fa fa-youtube text-white"></i>
                </a>
              </li>
              <li className="list-inline-item pr-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/ches.svnit.aiche/photos/?ref=page_internal"
                >
                  <i className="fa fa-facebook text-white"></i>
                </a>
              </li>
              <li className="list-inline-item pr-2">
                <a target="_blank" href="mailto: ches.svnit@gmail.com">
                  <i className="fa fa-google text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

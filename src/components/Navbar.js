import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tech">Personal Details</Link>
              </li>
            </ul>
            <div className="d-flex justify-content-center justify-content-lg-end">
              <a href="https://github.com/ayushprasad07" className="text-white mx-2" style={{ fontSize: "1.5rem" }}>
                <i className="bi bi-github"></i>
              </a>
              <a href="/" className="text-white mx-2" style={{ fontSize: "1.5rem" }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/feed/" className="text-white mx-2" style={{ fontSize: "1.5rem" }}>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

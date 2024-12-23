import React from "react";
import demo from "./demo.webp";
import { Link } from "react-router-dom";

export default function Hero() {
  const cardDesign = {
    boxShadow: "0px 0px 25px violet",
    border: "none",
    maxWidth: "90%", 
    minHeight: "50%",
    color: "white",
    borderRadius: "30px", 
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(250,250,250,0)", 
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(250,250,250,0)", 
        padding: "20px", 
      }}
    >
      <div className="card mb-3" style={cardDesign}>
        <div className="row g-0 d-flex justify-content-center align-items-center">
          <div
            className="col-12 col-md-4 text-center"
            style={{ padding: "20px" }}
          >
            <img
              src={demo}
              className="img-fluid rounded-circle"
              alt="Ayush Prasad"
              style={{
                height: "30vh", 
                width: "30vh", 
                maxWidth: "80%", 
                boxShadow: "0px 0px 25px violet",
              }}
            />
          </div>
          <div className="col-12 col-md-8">
            <div
              className="card-body d-flex justify-content-center align-items-center flex-column text-center"
              style={{ minHeight: "40vmin", padding: "20px" }}
            >
              <h1 className="card-title">Hi, I am Ayush Prasad</h1>
              <p className="card-text">
                I'm actively learning web development and have built several
                projects using HTML, CSS, and JavaScript. I'm also expanding my
                programming knowledge by exploring Java, Python, and C.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="btns d-flex justify-content-around align-items-center flex-wrap"
        style={{ width: "100%", maxWidth: "600px", marginTop: "20px" }}
      >
        <Link
          className="btn btn-primary m-2"
          to="about"
          role="button"
          style={{ minWidth: "120px" }}
        >
          About
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/projects"
          role="button"
          style={{ minWidth: "120px" }}
        >
          Projects
        </Link>
        <Link
          className="btn btn-primary m-2"
          to="/tech"
          role="button"
          style={{ minWidth: "120px" }}
        >
          Personal Details
        </Link>
      </div>
    </div>
  );
}

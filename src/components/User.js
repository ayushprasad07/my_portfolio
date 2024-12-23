import React from 'react'
import demo from "./demo.webp"
import tech from "./techimg-Photoroom.png"
import jimg from "./java-Photoroom.png"
import react from "./react-Photoroom.png"


export default function User() {

  const cardStyle = {
    width: "80%", 
    color: "white",
    height: "145%",
    borderRadius: "20px",
    padding: "10vh 5% 10vh 5%", 
    border: "none",
    backgroundColor: "rgba(250,250,250,0)",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 0px 30px purple",
    marginTop: "80px",
    marginBottom: "80px"
  };
  
  const imageStyle = {
    height: "30vh", 
    width: "30vh", 
    marginTop: "40px",
    marginBottom: "40px",
    borderRadius: "50%",
    boxShadow: "0px 0px 25px violet",
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{minHeight:"100vh"}}>
      <div className="card mb-3" style={cardStyle}>
        <div className="images">
          <img src={demo} className="card-img-top" alt="..." style={imageStyle}/>
        </div>
        <div className="card-body">
          <h1 className="card-title">Hi, I am Ayush Prasad</h1>
          <p className="card-text">I'm a KIET Ghaziabad CSE(AI) student passionate about web development. I've built 10 projects including an e-commerce website with a focus on user-friendliness.</p>
          
            <h3 style={{textAlign:"start"}}>Qualifications:</h3>
            <div style={{textAlign:"start"}}>
            <h5>Education :</h5>
            <ul>
              <li><p>Completed my 12th from the Aparnaa World School, Jharsuguda with 92% marks.</p></li>
              <li><p>Completed my 10th from St. Thomas English School, Jharsuguda with 91% marks.</p></li>
              <li><p>Currently persuing my B.tech from KIET, Ghaziabad with CSE(AI) branch.</p></li>
            </ul>
          </div>
          <div>
            <h5 style={{textAlign:"start"}}>Technical Skills: </h5>
            <img src={tech} alt="tech" style={{backgroundColor:"transparent",height:"20vmin"}}/>
          </div>
          <div className="techImages">
            <img src={jimg} alt="jimg" style={{backgroundColor:"transparent",height:"20vmin"}}/>
            <img src={react} alt="jimg" style={{backgroundColor:"transparent",height:"20vmin"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import weather from './Screenshot 2024-11-18 at 3.56.03 PM 10.58.13 AM.png';
import video from './web_video 10.58.09 AM.mov';
import log from './Screenshot 2024-11-19 at 12.16.45 AM 10.57.58 AM.png';
import random_pic from './Screenshot 2024-11-19 at 9.54.23 PM.png';

export default function Projects() {
  const cardStyle = {
    marginTop: '70px',
    backgroundColor: 'rgba(250,250,250,0.1)',
    maxWidth: '90%',
    color: 'white',
    backdropFilter: 'blur(10px)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 0px 20px purple',
  };

  const projectContainerStyle = {
    display: 'flex',
    flexWrap: 'nowrap', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: '30px',
    flexDirection: 'row', 
  };

  const imageStyle = {
    maxWidth: '500px',
    width: '100%',
    borderRadius: '20px',
    marginBottom: '20px',
    boxShadow: '0px 0px 15px violet',
  };

  const descriptionStyle = {
    maxWidth: '600px',
    width: '50%', 
    textAlign: 'justify',
    margin: '10px 20px',
  };

  const videoStyle = {
    maxWidth: '500px',
    width: '100%',
    borderRadius: '20px',
    boxShadow: '0px 0px 15px violet',
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ padding: '20px 0' }}>
      <div className="card" style={cardStyle}>
        <h1 className="card-header text-center">Projects</h1>
        <div className="card-body">
          {/* Weather Website */}
          <div style={projectContainerStyle}>
            <img src={weather} alt="Weather Website" style={imageStyle} />
            <div style={descriptionStyle}>
              <p>A weather website made using HTML, CSS, and JavaScript, providing real-time weather, wind speed, humidity, and UV index.</p>
              <p>It uses an API to fetch data applicable for all Indian cities.</p>
              <p>
                Here is the link for the weather website: <a href="https://ayushprasad07.github.io/Weather-js/" target="_blank" rel="noopener noreferrer">Weather website</a>
              </p>
            </div>
          </div>

          {/* Amazon Prime Clone */}
          <div style={projectContainerStyle}>
            
            <div style={descriptionStyle}>
              <p>A clone of Amazon Prime built using HTML and CSS.</p>
              <p>It's a static, non-functional clone focusing on UI design.</p>
              <p>
                Here is the GitHub link for the Prime Clone: <a href="https://ayushprasad07.github.io/prime-video-clone/" target="_blank" rel="noopener noreferrer">Prime Clone</a>
              </p>
            </div>
            <video
              src={video}
              alt="Amazon Prime Clone"
              style={videoStyle}
              autoPlay
              muted
              controls
            />
          </div>

          {/* Login Page */}
          <div style={projectContainerStyle}>
          <img src={log} alt="Login Window" style={imageStyle} />
            <div style={descriptionStyle}>
              <p>A login page website made using HTML, CSS, and JavaScript.</p>
              <p>It includes a password visibility toggle implemented in JavaScript.</p>
              <p>
                Here is the link for the Login website: <a href="https://ayushprasad07.github.io/Login-js/" target="_blank" rel="noopener noreferrer">Login website</a>
              </p>
            </div>
            
          </div>

          {/* Random Choice Picker */}
          <div style={projectContainerStyle}>
            
            <div style={descriptionStyle}>
              <p>A random choice picker website built using HTML, CSS, and JavaScript.</p>
              <p>The UI is built with HTML and CSS, and JavaScript handles the logic for random selection.</p>
              <p>
                Here is the link for the Random Choice Picker website: <a href="https://ayushprasad07.github.io/random-choice-picker/" target="_blank" rel="noopener noreferrer">Random Choice Picker</a>
              </p>
            </div>
            <img src={random_pic} alt="Random Choice Picker" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}




// import React from 'react'
// import weather from './Screenshot 2024-11-18 at 3.56.03 PM 10.58.13 AM.png'
// import video from './web_video 10.58.09 AM.mov'
// import log from "./Screenshot 2024-11-19 at 12.16.45 AM 10.57.58 AM.png"
// import random_pic from"./Screenshot 2024-11-19 at 9.54.23 PM.png"

// export default function Projects() {


//   const cardStyle={
//     marginTop:"70px",
//     marginBottom:"70px",
//     backgroundColor:"rgba(250,250,250,0)",
//     maxWidth:"90%",
//     color:"white",
//     backdropFilter:"blur(10px)",
//     // paddingLeft:"5%",
//     boxShadow:"0px 0px 20px purple"
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center flex-row" style={{minHeight:"100vh"}}>
//       <div className="card" style={cardStyle}>
//         <h1 className="card-header" style={{textAlign:"center"}}>Projects</h1>
//         <div className="card-body">
//           <div className="d-flex justify-content-between align-items-center flex-column" style={{width:"100%"}}>
//            <div className="project">
//               <img src={weather} alt="weather"style={{height: "50%", width: "50%" , borderRadius:"20px"}}/>
//            </div>
//             <div className="dispription" style={{width:"90%"}}>
//               <p>A weather website made using HTML, CSS and javascript which tells about the real time weather, wind speed, humidity, and uv-index </p>
//               <p>It uses API to fetch data and print them. It is applicable for all the cities of India.</p>
//               <p>Here is the link for weather website <a href="https://ayushprasad07.github.io/Weather-js/">Weather website</a></p>
//             </div>
//           </div>
//           <div className="d-flex justify-content-between align-items-center flex-column" style={{width:"100%",marginTop:"10%"}}>
//           <div className="project">
//           <video 
//             src={video} 
//             alt="video" 
//             style={{ height: "60%", width: "60%" ,borderRadius:"20px"}}
//             autoPlay 
//             muted 
//             controls
//           />
//            </div>
//           <div className="dispription" style={{width:"90%"}}>
//               <p>A clone of Amazon Prime using HTML and CSS.</p>
//               <p>It's a non-functional clone which uses only CSS and HTML.</p>
//               <p>Here is the git hub link for Amazon Prime <a href="https://ayushprasad07.github.io/prime-video-clone/">Prime Clone</a></p>
//             </div>
//           </div>
//           <div className="d-flex justify-content-between align-items-center flex-column" style={{width:"100%",marginTop:"10%"}}>
//            <div className="project">
//               <img src={log} alt="login window"style={{height: "50%", width: "50%" , borderRadius:"20px"}}/>
//            </div>
//             <div className="dispription" style={{width:"90%"}}>
//               <p>A weather website made using HTML, CSS and javascript. </p>
//               <p>It uses HTML, CSS and javascript which uses javascript for the password icon on clicking the eye button it shows the password.</p>
//               <p>Here is the link for Login website <a href="https://ayushprasad07.github.io/Login-js/">Login website</a></p>
//             </div>
//           </div>
//           <div className="d-flex justify-content-between align-items-center flex-column" style={{width:"100%",marginTop:"10%"}}>
//             <div className="project">
//                 <img src={random_pic} alt="login window"style={{height:"40%", borderRadius:"20px",width:"70%"}}/>
//             </div>
//               <div className="dispription" style={{width:"90%"}}>
//                 <p>A random choice picker website made using HTML, CSS and javascript. </p>
//                 <p>It uses HTML, CSS and javascript. HTML and CSS for the UI and javascript for the logic.</p>
//                 <p>Here is the link for random choie picker website <a href="https://ayushprasad07.github.io/random-choice-picker/">Random choice picker website</a></p>
//               </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

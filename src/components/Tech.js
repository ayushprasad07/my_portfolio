import React from 'react';
import demo from './demo.webp';

export default function Tech() {
  const cardStyle = {
    width: '90%', 
    maxWidth: '600px', 
    color: 'white',
    height: 'auto', 
    borderRadius: '20px',
    padding: '5% 5%',
    border: 'none',
    backgroundColor: 'rgba(250,250,250,0)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0px 0px 30px purple',
    marginTop: '20px',
  };

  const imageStyle = {
    height: '25vh', 
    width: '25vh', 
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '50%',
    boxShadow: '0px 0px 25px violet',
  };

  const iconStyle = {
    color: 'white',
    fontSize: '2rem',
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh' }}>
      <div className="card mb-3" style={cardStyle}>
        <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: 'auto', marginBottom: '20px' }}>
          <img src={demo} className="card-img-top" alt="Profile" style={imageStyle} />
          <h1 className="card-title" style={{ marginLeft: '10%', textAlign: 'center', fontSize: '2rem' }}>
            Ayush Prasad
          </h1>
        </div>
        <div className="card-body" style={{ width: '100%' }}>
          <div className="icons d-flex justify-content-around" style={{ width: '100%', marginTop: '20px' }}>
            <a href="https://github.com/" style={iconStyle}>
              <i className="bi bi-github"></i>
            </a>
            <a href="/" style={iconStyle}>
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/feed/" style={iconStyle}>
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="/" style={iconStyle}>
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

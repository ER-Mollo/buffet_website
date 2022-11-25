// import logo from './logo.svg';
import React from "react";
import './about.scss'
import image from '../../assets/painter.png'
import photo from '../../assets/photo.jpg'
import logo from '../../assets/logo.png'



function About() {
  return (
    <div className="about">
      <div className="heading">
        <h2>About</h2>
        <h1>Get To Know us</h1>
      </div>
      <div className="about_info">
        <div className="about_bio">
          <h1>Hello There,</h1>
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br></br><br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna 
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </p>
        </div>
        <div className="about_skills">

          <div className="skills">
           <img src={logo}/>
         
          </div>
          
        </div>
      </div>
    </div>

  );
}

export default About;

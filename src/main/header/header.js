// import logo from './logo.svg';
import React from "react";
import './header.scss'
import logo from '../../assets/logo.png'
import sample from '../../assets/video.mp4'

function Header() {
  return (
    <div className="main">
      <div className="info">
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
       
        <div className="info_buttons">
            <img src={logo}/>
            <button className="button">About Me</button>
            <button className="button">View Profile</button>
        </div>
      </div>
    </div>

  );
}

export default Header;

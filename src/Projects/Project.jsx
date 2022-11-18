import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import "./Project.scss";
import { Zoom } from 'react-slideshow-image';

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image2.jpg'
import image5 from '../assets/image3.jpg'


import './Project.scss'

import Contact from '../Contact/Contact';
function Projects() {
   const images = [
     image1,image2,image3,image4,image5
  ];
   return (
      <div className='project'>
        
        {/* <Contact/> */}
        {/* <div className="heading">
            <h2>Recent Projects</h2>
            <h1>Look At The Projects I Worked on</h1>
         </div> */}
        
         <div className="project-content">
            <div style={{ 'backgroundImage': `url(${images[0]})` }} className="select">
                   <span>Slide 1</span>
                   
             </div>
             <div style={{ 'backgroundImage': `url(${images[1]})` }} className="select">
                   <span>Slide 2</span>
             </div>
             <div style={{ 'backgroundImage': `url(${images[0]})` }} className="select">
                   <span>Slide 3</span>
             </div>   
             <div style={{ 'backgroundImage': `url(${images[1]})` }} className="select">
                   <span>Slide 3</span>
             </div>   
             <div style={{ 'backgroundImage': `url(${images[0]})` }} className="select">
                   <span>Slide 3</span>
             </div>   
         </div>
         {/* <div className='passage'>

         </div> */}

         
      </div>
   )
}

export default Projects

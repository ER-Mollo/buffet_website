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
const zoomOutProperties = {
      duration: 2000,
      transitionDuration: 2000,
      infinite: true,
      indicators: true,
      scale: 1.2,
      arrows: true
    };
    const images = [
      image1,image2,image3,image4,image5
   ];
function Projects() {
   
   return (
      <div className='project'>
   
         <div className="slide-container">
            
            <Zoom {...zoomOutProperties}>
           
                  <div style={{ 'backgroundImage': `url(${images[0]})` }} className="select">
                   <div className='project-content'>
                        <div className='content'>
                              <span className='words '>Food Lovers Kitchen</span>
                              <h1 className='words '>Food</h1>
                              <button className='button'>See Our Menu</button>
                        </div>
                        
                   </div>
                   
                   </div>
                   <div style={{ 'backgroundImage': `url(${images[1]})` }} className="select">
                   <div className='project-content'>
                        <div className='content'>
                              <span className='words '>Food Lovers Kitchen</span>
                              <h1 className='words '>Food</h1>
                              <button className='button'>See Our Menu</button>
                        </div>
                        
                   </div>
                   </div>
            
            </Zoom>

            </div>
         
        
         {/* <div className="project-content">
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

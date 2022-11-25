import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Zoom } from 'react-slideshow-image';

import g1 from '../../assets/g1.jpg'
import g2 from '../../assets/g2.jpg'
import g3 from '../../assets/g3.jpg'
import g4 from '../../assets/g4.jpg'
import g5 from '../../assets/g5.jpg'
import './comment.scss'

// import Contact from '../Contact/Contact';
function Comments() {
   const images = [
     g1,g2,g3,g4,g5
  ];
   return (
      <div className='comments'>
        
        {/* <Contact/> */}
        <div className="heading">
            <h2>Gallery</h2>
            <h1>Enjoy the Food, Fashion and Music</h1>
         </div>

         <div className='images'>
            {
                images.map((each, index) => (
                    <img key={index} style={{ width: "400px" ,height:"400px",padding:"0"}} className='img' src={each} />
                    ))
            }
         </div>
         
        
        

         
      </div>
   )
}

export default Comments

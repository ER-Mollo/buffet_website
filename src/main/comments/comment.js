import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Zoom } from 'react-slideshow-image';

import image1 from '../../assets/image3.png'
import image2 from '../../assets/image3.png'
import image3 from '../../assets/image4.png'
import './comment.scss'

// import Contact from '../Contact/Contact';
function Comments() {
   const images = [
     image1,image2,image3
  ];
   return (
      <div className='comments'>
        
        {/* <Contact/> */}
        <div className="heading">
            <h2>Recent Projects</h2>
            <h1>Look At The Projects I Worked on</h1>
         </div>
         
         <Zoom className="slide">
            <div className="each-slide-effect">
                <div className='main-cont'>
                   
                    
                        <div className='cont'>
                            <img src={image1} className='slide-image'/>
                            <h1>Client Name</h1>
                            <div style={{'width':'100%'}}>
                            <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                   
                </div>
            </div>

            <div className="each-slide-effect">
                <div className='main-cont'>
                    
                        
                    <div className='cont'>
                        <img src={image2} className='slide-image'/>
                        <h1>Client Name</h1>
                        <div style={{'width':'100%'}}>
                        <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </div>
                
                </div>
            </div>

            <div className="each-slide-effect">
                <div className='main-cont'>
                    
                        
                    <div className='cont'>
                        <img src={image3} className='slide-image'/>
                        <h1>Client Name</h1>
                        <div style={{'width':'100%'}}>
                            <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </Zoom>
        

        
        
    <div className='passage'>

    </div>
         
      </div>
   )
}

export default Comments

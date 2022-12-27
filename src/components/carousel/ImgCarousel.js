import React from 'react'
import './ImgCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';



const ImgCarousel = () => {
  return (
    <div className='container' name='carousel'>
      <Carousel 
        className='carousel' 
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
      >
        <div>
          <img src={BoraBora} alt='/'/>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={BoraBora2} alt='/'/>
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Maldives} alt='/'/>
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  )
}

export default ImgCarousel;

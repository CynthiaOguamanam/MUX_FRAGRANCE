import React, { useState } from 'react'
import { SliderData } from './sliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const CarouselSlider = ({slides}) => {

    const {currentData, setCurrentData} = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrentData(currentData === length - 1 ? 0 : currentData + 1);
    };
    const prevSlide = () => {
        setCurrentData(currentData === 0 ? length - 1 : currentData - 1);
    };
    // console.log(currentData);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

  return (
    <section className='container'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
    {SliderData.map((slide, index) =>{
        return (
            <div className={index === currentData ? 'slide active' : 'silde'} key={index}
            >
                {index === currentData && (
                    <img src={slide.image} alt='travel image' className='image' />
              )}
                
            </div>
        )
        
    })}
    </section>
  )
};

export default CarouselSlider;

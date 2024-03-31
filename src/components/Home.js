import React, { useEffect } from 'react';
import './Home.css';
import { useState } from 'react';
import imageSlide from './Slidedata';

const Home = () => {
  const [currentState, setcurrentState] = useState(0);
  const bgImageSlider = {
    backgroundImage: `url(${imageSlide[currentState]?.url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%'
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 4) {
        setcurrentState(0)
      } else {
        setcurrentState(currentState + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentState])

  const goToNextSlide = (index) => {
    setcurrentState(index);
  }

  return (
    <div className='ContainerSlide'>
      <div className='Slider'>
        <div style={bgImageSlider}></div>
        <div className='transparent-background'></div>
      </div>
      <div className='description'>
        <div>
          <h1>Welcome to our Website!</h1>
          <h3>Fresh Organic Products</h3>
          <h2>100% Naturals</h2>
        </div>
        <div className='carousel-item active'>
          {imageSlide.map((slide, index) => (
            <span key={index} onClick={() => goToNextSlide(index)}>-------</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

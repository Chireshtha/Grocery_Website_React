import React from 'react'
import './Aboutus.css'
import Organic from '../Images/organic.jpg'
import Apple1 from '../Images/Apple1.jpg'
import crop2 from '../Images/crop2.png'

const Aboutus = () => {
  return (
    <div className='aboutus'>
      <div className='container-aboutus'>
        <h1>About Us</h1>
      </div>
      <div className='about-us'>
        <img src={Organic} alt='loading' />
      </div>
      <div className='container-aboutus1'>
        <h2>
          Shop healthy, preservative free
          jams, pickles and snacks on our
          newest addition - The Marketplace
          Your one stop shop for happy
          mums and happier kids!
        </h2>
      </div>
      <div className='container-aboutus2'>
        <div className='image1'>
          <img src={Apple1} alt='loading' />
          <img src={crop2} alt='loading' />
        </div>
        <div className='content1'>
          <h2>Why choose Organic</h2>
          <p>Organic fruits and vegetables are alive, unlike conventional ones which are coated with waxes and sprayed with chemicals, basically mummifying them. We treat nature as it should be - to allow us to provide the freshest possible produce free from harmful pesticides and chemicals, that disrupt our physical health and mental wellbeing.<br /><br /><br />
            A little known fact about the human body is that 90% of our illnesses and ailments are food-related. They can be brought on by overconsumption of toxins through our meals, but can also be healed by the very same source - food. Good, organic, toxin-free food is the biggest gift we can give our bodies.<br /><br /><br />
            By choosing Organic foods, we make a promise to ourselves, our community, and our planet to live in synergy with our surroundings. We take a very important step in protecting our soils, our farmers, and our families. We vow to come together and change the way we consume, and in turn, evolve our interaction with our environment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus

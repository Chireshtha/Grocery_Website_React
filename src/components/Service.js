import React from 'react';
import './Service.css';
import Gif from '../Images/78nZ.gif';
import walpaper5 from '../Images/walpaper5.jpg';
import Fruits from '../Images/Fruits.jpg';
import vegetables from '../Images/vegetables.png';
import grains from '../Images/grains.jpeg';
import protein from '../Images/protein.jpg';
import dairy from '../Images/dairy.jpg';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import {FaHeadset, FaMoneyBill, FaTruck, FaUserShield} from 'react-icons/fa';

const Service = () => {
  const [text] = useTypewriter({words: ['Our Website!'],
  loop:{},
  typeSpeed : 100,
  deleteSpeed: 50,
  delaySpeed: 1500,
})
  const [category] = useTypewriter({
    words: ['Fruits', 'Vegetables', 'Grains', 'Meals', 'Dairy'],
    loop: { },
    typeSpeed : 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  })
  return (
    <>
    <div className='service'>
      <h1>Welcome To  <span>{text} <Cursor /></span> </h1><br/>
      <img src={Gif} alt='loading' />
    </div>
    <div className='service1'>
      <img src={walpaper5} alt='loading'/>
      <div className='background-img'>
      <h4>ORGANIC FOOD</h4>
      <h2>Looking for <br/> <span> the fresh organic food </span></h2>
      <h3><a href='Shop.js'>Shop Now </a></h3>
      </div>
      <div className='service2'>
        <div className='icon-truck'>
        <span><i className="fa fa-truck" aria-hidden="true"><FaTruck/> </i></span>
        <h5>Fast Shipping</h5>
        </div>
        <div className='icon-headset'>
        <span><i className="fa fa-headset"><FaHeadset/> </i></span>
        <h5>Support 24/7</h5>
        </div>
        <div className='icon-money'>
        <span><i className="fa fa-money" aria-hidden="true"><FaMoneyBill/> </i></span>
        <h5>100% Money Back </h5>
        </div>
        <div className='icon-shield'>
        <span><i className="fa fa-shield-fill-check"><FaUserShield/> </i></span>
        <h5>Payment Secure</h5>
        </div>
      </div>
      <div className='service4'>
        <h1>Top Categories</h1>
        <h2>Buy Our Fresh <span>{category}</span></h2>
          <div className='img'>
            <span>
            <img src={Fruits} alt='loading' />
            <h4><a href='Shop.js'> Fruits </a></h4>
            </span>
            <span>
            <img src={vegetables} alt='loading' />
            <h4><a href='Shop.js'>Vegetables</a></h4>
            </span>
            <span>
            <img src={grains} alt='loading' />
            <h4><a href='Shop.js'>Grains</a></h4>
            </span>
            <span>
            <img src={protein} alt='loading' />
            <h4><a href='Shop.js'>Protein Food</a></h4>
            </span>
            <span>
            <img src={dairy} alt='loading' />
            <h4><a href='Shop.js'>Dairy</a></h4>
            </span>
          </div>
      </div>


    </div>
    </>
  )
}

export default Service

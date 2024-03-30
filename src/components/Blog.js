import React from 'react';
import './Blog.css';
import BlogMenu from './BlogMenu';
import 'bootstrap/dist/js/bootstrap.js';
import Ads from '../Images/Ads.png';
import Spinach from '../Images/Spinach.jpg';
import Vegetable from '../Images/vegetable.jpg';

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog-dls'>
        <div className="btn-group">
          <button type="button" className="btn btn-success">Category</button>
          <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu btn btn-success">
            <a href='Shop.js' className="dropdown-item">Fruits</a>
            <a href='Shop.js' className="dropdown-item">Vegetables</a>
            <a href='Shop.js' className="dropdown-item">Grains</a>
            <a href='Shop.js' className="dropdown-item">Protein Foods</a>
            <a href='Shop.js' className="dropdown-item">Dairy</a>
          </div>
        </div>
        <div className='blog-details'>
          <img src={Ads} alt='loading'/>
          <h3>Organic 100% Genuine Product</h3>
          <h1>Tasty & <span>Healthy</span> <br /> Organic Food</h1>
          <p>Organic foods include fresh produce, meats,<br /> and dairy products</p>
        </div>
      </div>
      <div className='blog3'>
        <h2>Our Fresh Products</h2>
        <button className='btn btn-success'><a href='Shop.js'>Shop Now</a></button>
      </div>



      <div className='blog-contents'>
        <div className='blog1'>
          <img src={Spinach} alt='loading' />
          <h1>Organic Foods Up To 45% Off</h1>
          <h2>Friday Offer</h2>
        </div>
        <div className='blog2'>
          <img src={Vegetable} alt='loading' />
          <h1>Vegetables Up To 65% Off</h1>
          <h2>Daily Offer</h2>
        </div>
      </div>

      {
        BlogMenu.map((curntImgData, index) => {
          const { image } = curntImgData;
          return (
              <div className='marquee' key={index}>
                <img src= {image} alt='loading' />
              </div>
          ) 
        })
      }
    </div>
  )
}

export default Blog


import React, { useState } from 'react'
import './Contact.css'
import Gold from '../Images/Freshmarket.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    feedback: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:5000/contact', formData)
      .then(res => {
        console.log("Feedback submitted Successfully", res.data)
      })
      .catch(err => {
        console.error('Send Feedback ASAP', err);
      });

  };


  return (
    <div className='contact'>

      <div className='container-contact'>
        <h1>Contact Me</h1>
      </div>

      <div className='container-contact1'>
        <div className='container2'>
          <span>
            <i className='fa fas fa-map-marker'><FaMapMarkerAlt /> </i>
            <h1>OUR MAIN OFFICE</h1>
            <p>
              No: Electronic City Phase-I
              Bangalore-560100
            </p>
          </span>
          <span>
            <i className='fa fa-phone'><FaPhoneAlt /> </i>
            <h1>PHONE NUMBER</h1>
            <p>
              254-8976-5390 <br />
              888-0213-5467 (Toll Free)
            </p>
          </span>
          <span>
            <i className='fa fa-fax'><FaFax /> </i>
            <h1>FAX</h1>
            <p>
              1-234-567-8900
            </p>
          </span>
          <span>
            <i className='fa fa-envelope'><FaEnvelope /> </i>
            <h1>EMAIL</h1>
            <p>
              chire14vramirthy@gmail.com
            </p>
          </span>
        </div>
      </div>
      <div className='container-contact2'>
        <div className='container2'>
          <h1>Get In Touch</h1>
          <h2>Dear Customer, <br />
            Welcome To Our Website...
            Please Feel Free To Contact Us
          </h2>
          <p>
            Our products are high quality. We are commited to providing our customers with environmentally
            friendly, high quality products.
          </p>
          <div className="gold">
            <img src={Gold} alt="Surprise..." />
          </div>
          <div className="contacts">
            <a href="https://www.facebook.com/" className="fa fa-facebook" target="_blank" rel="noreferrer"><FaFacebook /> </a>
            <a href="https://www.twitter.com" className="fa fa-twitter" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" className="fa fa-instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" className="fa fa-linkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className='container3'>
          <form onSubmit={handleSubmit}>
            <div className="submit_form">
              <div className="name">
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-group">
                <i className='fas fa-user-alt'></i>
                <input type="text" name="name" id="name" placeholder="Enter Name" required="" onChange={handleChange} />
              </div>
            </div>
            <div className="submit_form">
              <div className="email">
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-group">
                <input type="email" name="email" id="email" placeholder="Enter Email ID" required="" onChange={handleChange} />
              </div>
            </div>
            <div className="submit_form">
              <div className="mobileno">
                <label htmlFor="mobile">Mobile No</label>
              </div>
              <div className="input-group">
                <input type="number" name="mobile" id="mobile" placeholder="Mobile No" required="" onChange={handleChange} />
              </div>
            </div>
            <div className="submit_form">
              <div className="Message">
                <label htmlFor="feedback">Feedback</label>
              </div>
              <div className="input-group">
                <textarea name="feedback" id="feedback" cols="38" rows="5" placeholder="Enter Feedback" required="" onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="submit_form">
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbarmain.css'
import logo from '../Images/logo.bmp'

const Navbarmain = () => {
    const [display, setDisplay] = useState(false);

    const toggleMenu = () => {
        setDisplay(!display)
    }

    return (
        <div className='navbar1'>

            <div className='navbox'>
                <div className='logo'>
                    <img src={logo} alt='loading' />
                </div>
                <div className={`navbox-1 ${display ? "display" : ""}`}>                
                    <Link to='/' className='text-decoration-none  white-border'><span>Home</span></Link>
                    <Link to='/Navbar' className='text-decoration-none white-border'><span>Shop</span></Link>
                    <Link to='/Blog' className='text-decoration-none white-border'><span>Blog</span></Link>
                    <Link to='/Service' className='text-decoration-none white-border'><span>Service</span></Link>
                    <Link to='/Contact' className='text-decoration-none white-border'><span>Contact</span></Link>
                    <Link to='/Aboutus' className='text-decoration-none white-border'><span>About Us</span></Link>
                </div>
                <div className='Loginbtn'>
                    <button className='btn btn-light'>
                        <Link to='/Login' className='text-decoration-none'><strong>Login</strong></Link>
                    </button>
                </div>
                <div className="menuIcon" onClick={toggleMenu}>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
            </div>

        </div>
    )
}

export default Navbarmain

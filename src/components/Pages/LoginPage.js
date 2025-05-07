import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css' 

const Loginpage = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/Login");
    }
  return (
    <div className='btn-default w-100 mt-4'>
        <Link to='/Login' className='btn btn-outline-dark' onClick={handleClick}>Login</Link>
    </div>
  )
}

export default Loginpage

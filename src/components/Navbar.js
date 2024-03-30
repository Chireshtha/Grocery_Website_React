import React from 'react'
import './Navbar.css'

const Navbar = ({ filterItem, menuList }) => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='btn-group'>
          {
            menuList.map((currentElement,index) => {
              return (
                <button className='btn btn-light' key={index} onClick={() => filterItem(currentElement)}>{currentElement}</button>
              );
              
            })
          }

        </div>

      </nav>
    </div>
  )
}

export default Navbar

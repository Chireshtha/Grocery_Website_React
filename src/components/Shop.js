import React from 'react'
import Grocerymenu from './GroceryItems'
import GroceryMenucard from './GroceryMenucard'

const Shop = ({ handleClick }) => {
  return (
    <section>
      {
        Grocerymenu.map((currentElement) => {
          return(
          <GroceryMenucard currentElement={currentElement} key={currentElement.id} handleClick={handleClick} />)
        })
      }
    </section>
  )
}


export default Shop

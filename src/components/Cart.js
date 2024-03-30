import React from 'react'
import './Cart.css'
import { FaCartPlus } from 'react-icons/fa'


const Cart = ({size,setShow, handleChange, handleOrder}) => {

 
    return (
        <section>
        <div className='shopping'>
            <span className='mycart' onClick={()=>setShow(true)}><h3>My Cart</h3></span>
            <span className='placeorder' onClick={()=>{handleOrder()}}><h3>Place Order</h3></span>
        </div>

            <span className='cart' onClick={()=>setShow(false)}>
                <i className="fa fa-cart-plus"> <FaCartPlus /></i>
                <span>{size}</span>
            </span>
        </section>     
    )
}

export default Cart

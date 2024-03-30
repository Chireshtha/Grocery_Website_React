import React, { useEffect, useState } from 'react'
import './Mycart.css'
import 'bootstrap/dist/css/bootstrap.css';


const Mycart = ({ cart, setCart, handleChange, handleOrder, OrderItem }) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let res = 0;
        cart.map((currentElement) => {
            return (
                res += currentElement.amount * currentElement.price
            )
        })
        setPrice(res);
    }


    useEffect(() => {
        handlePrice()
    })

    const handleRemove = (id) =>{
        const arr = cart.filter ((currentElement) => currentElement.id !== id);
        setCart(arr)
    }


    return (

        <article>
            {
                cart?.map((currentElement) => (
                    <div className='mycart_box' key={currentElement.id}>
                        <div className='mycart_img'>
                            <span className='c1'> {currentElement.id} </span>
                            <span className='c2'> {currentElement.category} </span>
                            <img src={currentElement.image} alt='Loading' />
                            <span className='c3'>{currentElement.name}</span>
                        </div>

                        <div className='addsub_item'>

                            <button className='btn btn-success' onClick={() => handleChange(currentElement, +1)}> + </button>
                            <button className='amount'> {currentElement.amount} </button>
                            <button className='btn btn-danger' onClick={() => handleChange(currentElement, -1)}> - </button>
                        </div>

                        <div className='cart1'>
                            <span> {currentElement.price} </span>
                            <button className='btn btn-danger' onClick={()=>handleRemove(currentElement.id)}> Remove </button>
                        </div>
                    </div>
                ))
            }
            <div className='total_price'>
                <span className='p1'> Total Price of Your Cart</span>
                <span className='p2'> Rupees ₹{ price } </span>
            </div>

            <div className='order'>
                <span className='order1' onClick={() => handleOrder(OrderItem)}>Order Now</span>
            </div>
        </article>
    )
}

export default Mycart

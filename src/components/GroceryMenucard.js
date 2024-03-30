import React from 'react'

const GroceryMenucard = ({ menuData, handleClick, handleOrder, OrderItem }) => {
    return (
        <>
            {/* <metadata title={ menuData.name }/> */}
            <section className='main-card--cointainer'>
                {
                    menuData.map((currentElement) => {
                        // console.log("test", currentElement)

                        // Destructuring the currentElement
                        
                        const { name, category, image, price } = currentElement;

                        return (

                            <div key={currentElement.id}>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            {/* <span className='card-number card-circle subtle'> {id} </span> */}
                                            <span className='card-name'> {name} </span>
                                            <span className='card-category'> {category} </span>
                                            <div className='card-read'>Read</div>
                                            <img src={image} alt="loading" className='card-media' />
                                            <span className='card-tag1 subtle' onClick={() => handleClick(currentElement)}>Add to cart</span>
                                            <span className='card-tag2 subtle' onClick={() => handleOrder(OrderItem)}>Order Now</span>
                                            <span className='card-price'>  ₹{price} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </section >
        </>   
    )
}


export default GroceryMenucard

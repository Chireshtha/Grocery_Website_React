import React, { useState } from 'react'
import Cart from './Cart'
import Grocerymenu from './GroceryItems'
import Navbar from './Navbar'
import GroceryMenucard from './GroceryMenucard'
import Mycart from './Mycart'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginpage from './LoginPage'
import Navbarmain from './Navbarmain'
import Home from './Home'
import Shop from './Shop'
import Blog from './Blog'
import Service from './Service'
import Contact from './Contact'
import Aboutus from './Aboutus'


const uniqueList = [...new Set(Grocerymenu.map((currentElement) => {
    return currentElement.category;
})), "All"];
console.log(uniqueList)

const GroceryMarket = () => {
    const [menuData, setMenuData] = useState(Grocerymenu);
    const [menuList] = useState(uniqueList); //setMenuList
    const [show, setShow] = useState(true)
    const [cart, setCart] = useState([])
    const [warning, setWarning] = useState(false)

    const filterItem = (category) => {

        if (category === "All") {
            setMenuData(Grocerymenu)
            return;
        }
        const updatedList = Grocerymenu.filter((currentElement) => {
            return currentElement.category === category;
        });

        setMenuData(updatedList)

    };
    // console.log("menudata", menuData)//Full data
    // console.log("menulist", menuList)//category

    const handleClick = (currentElement) => {

        // console.log("check", currentElement)
        let isPresent = false;
        cart.forEach((Product) => {
            if (currentElement.id === Product.id) {
                isPresent = true;
            }
        })
        if (isPresent) {
            console.log("check", isPresent)
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, 2000);
            return
        }
        setCart([...cart, currentElement])
    }


    const handleChange = (currentElement, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === currentElement.id)
                ind = index;
        });
        const tempArr = cart;
        tempArr[ind].amount += d;
        if (tempArr[ind].amount === 0)
            tempArr[ind].amount = 1;
        setCart([...tempArr])
    }

    const handleOrder = (OrderItem) => {
        alert("Item Ordered Successfully")
    }

    return (
        <BrowserRouter>
            <Navbarmain />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Shop' element={<Shop />}></Route>
                <Route path='/Blog' element={<Blog />}></Route>
                <Route path='/Service' element={<Service />}></Route>
                <Route path='/Contact' element={<Contact />}></Route>
                <Route path='/Aboutus' element={<Aboutus />}></Route>
                
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/Login' element={<Loginpage />}></Route>
                <Route path='/' element={<Login />}></Route>
                <Route path='/Signup' element={<Signup />}></Route>
                <Route path='/Navbar' element={<Navbar filterItem={filterItem} menuList={menuList} />}></Route>
            </Routes>

            <Cart size={cart.length} setShow={setShow} handleChange={handleChange} handleOrder={handleOrder} /> 



            {
                show ? <Shop handleClick={handleClick} /> && <GroceryMenucard menuData={menuData} handleClick={handleClick} handleOrder={handleOrder} /> : <Mycart cart={cart} setCart={setCart} handleChange={handleChange} handleOrder={handleOrder} />  
            }


            {
                warning && <div className='alert alert-danger'>
                    Item has been Already Added
                </div>
            }
        </BrowserRouter>
        

    );
}

export default GroceryMarket
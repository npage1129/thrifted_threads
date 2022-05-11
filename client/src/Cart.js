import Header from './Header';
import './Cart.css';
import React, {useState} from 'react';



function Cart({item, setItem, cart, setCart, page, setPage}){
    const pageCart = 'products' 
    return(
        <div>
            <Header />  
            <h1>CART</h1>
            const inCart = cart.filter(product => product.product_color === "green" ||product.product_color === "multi" )
                        {cart.map(item => {
                        }
                        )
                        }               
                            <div>
                            {page === "cart" ? <img className="image" src={item.img}/> : null}
                            {page ==="cart" ? <p className="name" id="inCard">{item.name} <br></br>${item.price}</p>: null }
                        </div>
        </div>
    )
}

export default Cart;
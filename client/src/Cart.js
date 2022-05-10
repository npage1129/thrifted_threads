import Header from './Header';
import './Cart.css';
import React, {useState} from 'react';

function Cart({item, setItem, page, setPage}){
    
    return(
        <div>
            <Header />  
            <h1>CART</h1>
                            <div>
                            {page === "cart" ? <img className="image" src={item.img}/> : null}
                            {page ==="cart" ? <p className="name" id="inCard">{item.name} <br></br>${item.price}</p>: null }
                        </div>
        </div>
    )
}

export default Cart;
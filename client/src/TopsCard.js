import './ClothingCard.css';
import React from 'react';


function TopsCard({item, setCart, cart}){
    const addToCart = (product) => {
        console.log('added to cart')
        setCart([...cart, product]);
    };
    const newItems = item.filter(product => product.product_category === "top")
    console.log(newItems)
    return(
        <div className="wrapper">
            {newItems.map(item =>
                    <div className="cards">
                            {item.product_category === "top" ? <img className="image" src={item.img}/> : null}
                            {item.product_category ==="top" ? <p className="name" id="inCard">{item.name} <br></br>${item.price}</p>: null }
                        </div>
            )},
        </div>
    )
}

export default TopsCard;
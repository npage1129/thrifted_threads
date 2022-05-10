import React from 'react'
import './ClothingCard.css'

function ClothingCard({item, setCart, cart}){
    const addToCart = (product) => {
        console.log('added to cart')
        setCart([...cart, product]);
    };
    const newItems = item.filter(product => product.product_color === "green" ||product.product_color === "multi" )
    console.log(newItems)
    return(
        <div className="wrapper">
            {newItems.map(item =>
                    <div className="cards">
                            {item.product_color === "green" ||item.product_color === "multi" ? <img className="image" src={item.img}/> : null}
                            {item.product_color ==="green" || item.product_color === "multi" ? <p className="name" id="inCard">{item.name} <br></br>${item.price}</p>: null }
                            {item.product_color === "green" || item.product_color === "multi" ? <button className="cart" onClick={(item)=>addToCart(item)}>Add To Cart</button> : null}
                        </div>
                        
            )},
        </div>
    )
}



export default ClothingCard
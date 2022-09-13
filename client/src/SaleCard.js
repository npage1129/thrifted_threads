import './ClothingCard.css';
import React from 'react';


function SaleCard({item, setCart, cart}){
    const addToCart = (product) => {
        console.log('added to cart')
        setCart([...cart, product]);
    };
    const newItems = item.filter(product => product.on_sale === true)
    console.log(newItems)
  
    return(
        <div className="wrapper">
            {newItems.map(item =>
                    <div className="cards">
                            {item.on_sale === true ? <img className="image" src={item.img}/> : null}
                            {item.on_sale === true ? <p className="name" id="inCard">{item.name}<br></br> <strike style={{color:'red'}}>${item.original_price}</strike> <br></br> ${item.price}</p> : null}
                    
                        </div>
            )},
        </div>
    )
}

export default SaleCard;
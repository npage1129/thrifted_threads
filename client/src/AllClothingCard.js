import React from 'react'
import './ClothingCard.css'

function AllClothingCard({item, addToCart}){
    
    const newItems = item.filter(product => product.product_category === "top" ||product.product_category === "bottoms" ||product.product_category === "dress" )
    console.log(newItems)
    return(
        <div className="wrapper">
            {newItems.map(item =>
                    <div className="cards">
                            {item.product_category === "top" ||item.product_category === "bottoms" ||item.product_category === "dress" ? <img className="image" src={item.img}/> : null}
                            {item.product_category ==="top" || item.product_category === "bottoms" ||item.product_category === "dress" ? <p className="name" id="inCard">{item.name} <br></br>${item.price}</p>: null }
                        </div>
                        
            )},
        </div>
    )
}



export default AllClothingCard
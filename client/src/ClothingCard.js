import React from 'react'
import './ClothingCard.css'



function ClothingCard({item}){
    return(
        <div>
            {item.map(item =>
                    <div className="cards">
                            {item.on_sale ? <img src={item.img}/> : null}
                            {item.on_sale ?<div className="name" id="inCard">{item.name} <br></br><br></br>${item.price}</div>: null }
                            {item.on_sale ?<button className="cart">Add To Cart</button> : null}
                        </div>
                        
            )},
        </div>
    )
}



export default ClothingCard
import React from 'react'

function ClothingCard({item}){
    return(
        <div>
            {item.map(item =>
                <div className="wrapper">
                    <div className="cards_wrap">
                        <div className="card_item">
                            <div className="card_inner">
                                <div className="ItemImage" id="inCard">{item.img}</div>
                                <div className="Item Name" id="inCard">{item.name}</div>
                                <div className="ItemPrice" id="inCard">${item.price}</div>
                            </div>
                         </div>
                    </div>
                </div>
            )},
        </div>
    )
}



export default ClothingCard
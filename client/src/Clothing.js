import './Clothing.css';
import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import ClothingCard from './ClothingCard'

    function Clothing() {
        const [item, setItem] = useState([])
        useEffect(()=> {
            fetch(`http://localhost:4000`)
            .then((resp) => resp.json())
            .then((data) => setItem(data))
    },[]) 
    return(
        <div>
           <Header />
     <ClothingCard item ={item} setItem ={setItem}/>
            <Footer />
        </div>
    )
    }

export default Clothing;
import React, {useEffect ,useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import ClothingCard from './ClothingCard'
import './Home.css';

function Home(){
    const [cart, setCart] =useState([])
    const [item, setItem] = useState([])
    const addToCart = (product) => {
        console.log('added to cart')
        setCart([...cart, product]);
    };

    useEffect(()=> {
        fetch('http://localhost:3000/products', {
        
    })
        .then((resp) => resp.json())
        .then((data) => setItem(data))
    },[]) 

    return(
        <div id="home" >
            <Header id='header' cart = {cart} setCart ={setCart}/>
            <ClothingCard item ={item} setItem ={setItem} cart = {cart} setCart ={setCart} addToCart={addToCart}/>
            <Footer id='footer'/>
        </div> 
    )
}

export default Home;
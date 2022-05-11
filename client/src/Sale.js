import React, {useEffect ,useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import SaleCard from './SaleCard'
import Cart from './Cart';
// import './Home.css';

function Sale(){
    const [cart, setCart] = useState([])
    const [item, setItem] = useState([])
    const[page, setPage] = useState(['cart'])

    useEffect(()=> {
        fetch('http://localhost:3000/products', {
        
    })
        .then((resp) => resp.json())
        .then((data) => setItem(data))
    },[]) 
    
    return(
        <div id="home" >
            <Header id='header' cart = {cart} setCart ={setCart}/>
            <SaleCard item ={item} setItem ={setItem} setCart={setCart} cart = {cart}/>
            <Cart item= {item} setItem={setItem} setCart={setCart} cart={cart} page={page} setPage={setPage}/>
            <Footer id='footer'/>
        </div> 
    )
}

export default Sale;
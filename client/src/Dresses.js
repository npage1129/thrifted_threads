import React, {useEffect ,useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import DressesCard from './DressesCard'
// import './Home.css';

function Dresses(){
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
            <Header id='header' />
            <DressesCard item ={item} setItem ={setItem} />
            <Footer id='footer'/>
        </div> 
    )
}

export default Dresses;
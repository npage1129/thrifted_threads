import React, {useEffect ,useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import SaleCard from './SaleCard'

// import './Home.css';

function Sale(){
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
            <Header id='header'/>
            <SaleCard item ={item} setItem ={setItem}/>
    
            <Footer id='footer'/>
        </div> 
    )
}

export default Sale;
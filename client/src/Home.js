import React, {useEffect ,useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import ClothingCard from './ClothingCard'
import './Home.css';

function Home(){

    const [item, setItem] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/products', {
        
    })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    },[]) 

    return(
        <div id="home" >
            <Header id='header'/>
            <ClothingCard item ={item} setItem ={setItem}/>
            <Footer id='footer'/>
        </div> 
    )
}

export default Home;
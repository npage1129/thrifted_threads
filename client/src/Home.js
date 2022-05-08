import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

function Home(){
    return(
        <div id="home" >
            <Header id='header'/>
            <Footer id='footer'/>
        </div> 
    )
}

export default Home;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Login from './Login';
import './Home.css';

function Home(){
    return(
        <div id="home" >
            <Header id='header'/>
            {/* <Login id='Login' /> */}
            <Footer id='footer'/>
        </div> 
    )
}

export default Home;
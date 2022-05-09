import React from 'react';
import './Header.css'; 
import logo from "../src/images/logoWithoutB.png"

function Header(){
    function takeHome(){
        window.location.replace("http://localhost:3000/Home")
    }
    return(
        <div id="Header">
            <img className='logo' src={logo}></img>
            <nav className="navBar">
                <a className ='navLink' href="./Home" >Home</a> 
                <a className ='navLink' href="./Clothing" >Clothing</a> 
                <a className ='navLink' href="./Sale">Sale</a>
            </nav>
            {/* <img className="headerImage" src={logo} alt="Logo" onClick={takeHome}></img>                                                     */}
</div>
   )
}
export default Header;
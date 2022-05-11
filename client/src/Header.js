import React from 'react';
import './Header.css'; 
import logo from "../src/images/logoWithoutB.png"

function Header({cart}){
    function takeHome(){
        window.location.replace("http://localhost:4000/Home")
    }
    return(
        <div id="Header">
            <img className='logo' src={logo} alt="Logo" onClick={takeHome}></img>
            <nav className="navBar">
                <a className ='navLink' href="./Home" >Home</a>

            <div className="wrapper">
                <div className="right-menu">
                    <button className ="menu-button">Clothing</button>
                        <div className="drop-down">
                            <a className ='navLink' href="./Tops" >Tops</a>
                            <a className ='navLink' href="./Bottoms" >Bottoms</a>
                            <a className ='navLink' href="./Dresses" >Dresses</a>
                        </div>
                </div> 
            </div>


                <a className ='navLink' href="./Sale">Sale</a>
                <a className ='navLink' href="./Cart">Cart</a>
            </nav>
            {/* <img className="headerImage" src={logo} alt="Logo" onClick={takeHome}></img>                                                     */}
</div>

)
}
export default Header;
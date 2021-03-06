import React from 'react';
import './Header.css'; 
import logo from "../src/images/logoWithoutB.png"

function Header({setPage, page}){
    function takeAll(){
        window.location.replace("/Clothing")
    }
    const navigateTo =(cartPage) => {
        setPage(page);
    }
    return(
        <div id="Header">
            <a href= "/Home"><img className='logo' src={logo} alt="Logo"></img></a>
            <nav className="navBar">
                <a className ='navLink' href="./Home" >Home</a>

            <div className="wrapper1">
                <div className="right-menu">
                    <button className ="menu-button" onClick={takeAll}>Clothing</button>
                        <div className="drop-down">
                            <a className ='navLink' href="./Tops" >Tops</a>
                            <a className ='navLink' href="./Bottoms" >Bottoms</a>
                            <a className ='navLink' href="./Dresses" >Dresses</a>
                        </div>
                </div> 
            </div>


                <a className ='navLink' href="./Sale">Sale</a>
                <a className ='navLink' href="./Reviews">Reviews</a>
                <a className ='navLink' href="./Account">Account</a>
            </nav>
            {/* <img className="headerImage" src={logo} alt="Logo" onClick={takeHome}></img>                                                     */}
</div>

)
}
export default Header;
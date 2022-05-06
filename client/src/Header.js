import React from 'react';
import './Header.css'; 

function Header(){
    function takeHome(){
        window.location.replace("http://localhost:3000/Home")
    }
    return(
        <div id="Header">
            <nav className="navBar"> 
                <a className ='navLink' href="./Home" >Home<br></br></a> 
                <a className ='navLink' href="./Clothing" >Clothing<br></br></a> 
                <a className ='navLink' href="./Submission">Sale<br></br></a>
            </nav>
            <img className="headerImage" src={logo} alt="Logo" onClick={takeHome}></img>                                                    
</div>
   )
}
export default Header;
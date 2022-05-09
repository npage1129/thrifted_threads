import React from 'react';
import './Footer.css';  

function Footer(){
    return(
        <div id="Footer">
            <footer class="footer">
  {/* <div class="l-footer">
  <h1>
  <img id="footerLogo" src={logo} alt="logo" width="100%" height="100px"/></h1>
  <p>The most amazing pastry database, where you can search for pastries and look at the top rated pastries!</p>
  </div> */}
  <ul class="r-footer">
  <li>
    <h2>
  Account</h2>
    <ul class="box">
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Account</a></li>
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Links</a></li>
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Here</a></li>
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Maybe?</a></li>
  </ul>
  </li>
  <li class="features">
  <h2>
  Customer Service</h2>
    <ul class="box">
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Here</a></li>
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Instead</a></li>
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Of</a></li>
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Navbar</a></li>
  </ul>
  </li>
  
  <li class="l-footer">
  <h2>
  About</h2>
    <ul class="box">
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Our</a></li>
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Links</a></li>
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Or</a></li>
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">Redirect</a></li>
  </ul>
  </li>
  </ul>
  </footer>
        </div> 
    )
}
export default Footer;
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
  Customer Care</h2>
    <ul class="box">
    <li><a href="https://www.snopes.com/tachyon/2016/10/spongebob.jpg?resize=865%2C452&crop_strategy=smart">605-475-6973</a></li>
    <li><a href="/Reviews">Submit A Review</a></li>
    <li><a href="https://www.asos.com/us/discover/size-charts/women/">Size Guide</a></li>
    <li><a href="https://www.nastygal.com/page/terms-and-conditions.html">Terms & Conditions</a></li>
  </ul>
  </li>
  
  <li class="l-footer">
  <h2>
  About</h2>
    <ul class="box">
    <li><a href="https://github.com/npage1129" target="_blank">Nicole's GitHub</a></li>
    <li><a href="https://github.com/RainbowLex" target="_blank">Alexia's GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/nicole-page-556910175/" target="_blank">Nicole's LinkedIn</a></li>
    <li><a href="https://www.linkedin.com/in/alexia-velador-67b76a235/" target="_blank">Alexia's LinkedIn</a></li>
  </ul>
  </li>
  </ul>
  </footer>
        </div> 
    )
}
export default Footer;
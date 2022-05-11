import React from 'react';
import Home from './Home';
import Clothing from './Clothing';
import Tops from './Tops';
import Bottoms from './Bottoms';
import Dresses from './Dresses';
import Sale from './Sale';
import Reviews from './Reviews';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {

  return(
    <div>
      <Router>
      <Routes>
      <Route path= "/"  element = {<Home/>} />
      <Route path= "/home"  element = {<Home/>} />
      <Route path="/clothing" element = {<Clothing/>}/>
      <Route path='/tops' element={<Tops/>}/>
      <Route path='/bottoms' element={<Bottoms/>}/>
      <Route path='/dresses' element={<Dresses/>}/>
      <Route path="/sale" element = {<Sale/>}/>
      <Route path="/reviews" element = {<Reviews/>}/>
            </Routes>
      </Router>
    </div>
  );
}

export default App;

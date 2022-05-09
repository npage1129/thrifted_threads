import React from 'react';
import Home from './Home';
import Clothing from './Clothing';
import Sale from './Sale';
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
      <Route path="/sale" element = {<Sale/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

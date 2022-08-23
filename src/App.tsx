import React from 'react';
import './App.css';
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import {NavBar} from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/store" element={<Store />}></Route>
      </Routes>
    </>
  );
}

export default App;



/* 


Pegar outro carrinho 
https://www.youtube.com/watch?v=lATafp15HWA&ab_channel=WebDevSimplified

15:55


*/
import React from 'react';
import './App.css';
import { About } from './pages/About'
import { Home } from './pages/Home'
import { ShoppingCart } from './context/ShoppingCartContext'
import { Store } from './pages/Store/Store'
import {NavBar} from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <ShoppingCart>
    <div>
      <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/store" element={<Store />}></Route>
      </Routes>
      </ShoppingCart>
    </>

  );
}

export default App;



/* 


https://devtrium.com/posts/how-use-react-context-pro

HOME - Na home page, fazer um carrosel de produtos girando a cada tantos segundos e conforme a foto embaixo um banner com descrição do produto e detalhes técnicos do mesmo que atualiza conforme a foto do carrosel 

SHOPPING CART PAGE: dinamic on the right when you click in the cart, add also a finish purchase button with window alert
STORE - o carrinho vai ser um array de objects atualizado pelo context
ABOUT - Link para o portfolio e Github

https://www.youtube.com/watch?v=lATafp15HWA&ab_channel=WebDevSimplified


*/
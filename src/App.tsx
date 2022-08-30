import {useState} from 'react';
import './App.css';
import { About } from './pages/About'
import { Home } from './pages/Home'
import { ShoppingCartContext } from './context/ShoppingCartContext'
import { Store } from './pages/Store/Store'
import {NavBar} from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import itemsArray from './data/items'

type ItemCheck = {
  id?:number,
  name?:string,
  price?:number,
  imgUrl?:string,
  quantity?: number
}

function App() {
  const [cartItems,setCartItems] = useState<ItemCheck[]>(itemsArray)
  function plusItem(){
    console.log('Plus')
  }
  function minusItem(){
    console.log('Minus')
  }
  return (
    <>
    <ShoppingCartContext.Provider value={{cartItems,plusItem, minusItem}}>
    <div>
      <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/store" element={<Store />}></Route>
      </Routes>
      </ShoppingCartContext.Provider>
    </>

  );
}

export default App;

/* 

HOME - Na home page, fazer um carrosel de produtos girando a cada tantos segundos e conforme a foto embaixo um banner com descrição do produto e detalhes técnicos do mesmo que atualiza conforme a foto do carrosel 

SHOPPING CART PAGE: dinamic on the right when you click in the cart, add also a finish purchase button with window alert
STORE - o carrinho vai ser um array de objects atualizado pelo context
ABOUT - Link para o portfolio e Github

https://www.youtube.com/watch?v=lATafp15HWA&ab_channel=WebDevSimplified


*/
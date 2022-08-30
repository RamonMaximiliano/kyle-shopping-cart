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
  quantity: number
}

function App() {
  const [cartItems,setCartItems] = useState<ItemCheck[]>(itemsArray)

  const plusItem = function(e:any){
    const newState = cartItems.map(item => {
      if(item.id == e){
        return {...item, quantity: item.quantity += 1}
      } else {
        return item
      }
    })
    setCartItems(newState)
  }

  const minusItem = function(e:any){
    const newState = cartItems.map(item => {
      if(item.id == e){
        return {...item, quantity: item.quantity -= 1}
      } else {
        return item
      }
    })
    setCartItems(newState)  }

  return (
    <>
    <ShoppingCartContext.Provider value={{cartItems,plusItem, minusItem,setCartItems}}>
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


Já peguei o ID de cada item sendo clicado, utilizar o ID para alterar a quantity do state: cartItems


HOME - Na home page, fazer um carrosel de produtos girando a cada tantos segundos e conforme a foto embaixo um banner com descrição do produto e detalhes técnicos do mesmo que atualiza conforme a foto do carrosel 

SHOPPING CART PAGE: dinamic on the right when you click in the cart, add also a finish purchase button with window alert
STORE - o carrinho vai ser um array de objects atualizado pelo context
ABOUT - Link para o portfolio e Github

https://www.youtube.com/watch?v=lATafp15HWA&ab_channel=WebDevSimplified



Set logic for Remove button

GET QUANTITY:

https://bobbyhadz.com/blog/react-update-object-in-array#:~:text=To%20update%20an%20object%20in,all%20other%20objects%20as%20is.

https://bobbyhadz.com/blog/react-update-state-array-of-objects
*/
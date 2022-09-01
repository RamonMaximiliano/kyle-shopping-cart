import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'


export const Cart = () => {
    const { showCart, cartItems } = useContext(ShoppingCartContext)

    return (
        <div className={`main-div ${showCart! ? "show-cart" : null}`}>

        </div>
    )
}


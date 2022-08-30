import './styles.css'
import { StoreItem } from '../../components/StoreItem/StoreItem'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

type storeItem = {
    id?: number,
    name?: string,
    price?: number,
    imgUrl?: any,
    quantity: number,
    plusItem?:(e:any)=> void,
    minusItem?:(e:any)=> void,
    removeItem?:(e:any)=> void
}


export function Store() {
    const {plusItem,minusItem,cartItems,removeItem} = useContext(ShoppingCartContext)
    return (
        <>
            <h2 className="store-title">Store</h2>
            <div className="store-div">
            {
                cartItems.map((item:storeItem) => 
                    <StoreItem name={item.name} imgUrl={item.imgUrl} price={item.price} key={item.id} id={item.id} plusItem={plusItem} minusItem={minusItem} quantity={item.quantity} removeItem={removeItem}></StoreItem>
                )
            }       
            </div>      
        </>
    )
}



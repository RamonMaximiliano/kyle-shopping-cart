import './styles.css'
import itemsArray from "../../data/items"
import { StoreItem } from '../../components/StoreItem/StoreItem'
import  {ShoppingCart} from '../../context/ShoppingCartContext'
import  {useContext} from 'react'

type storeItem = {
    id?: number,
    name?: string,
    price?: number,
    imgUrl?: any,
    quantity?: number
}


export function Store() {

    const {test} = useContext(ShoppingCart)

    return (
        <>
            <h2 className="store-title">Store</h2>
            <div className="store-div">
            {
                itemsArray.map((item:storeItem) => 
                    <StoreItem name={item.name} imgUrl={item.imgUrl} price={item.price} key={item.id} id={item.id}></StoreItem>
                )
            }       
            </div>      
        </>
    )
}



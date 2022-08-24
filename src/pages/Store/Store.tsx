import './styles.css'
import itemsArray from "../../data/items"
import { StoreItem } from '../../components/StoreItem/StoreItem'

/* console.log(itemsArray) */

type storeItem = {
    id?: number,
    name?: string,
    price?: number,
    imgUrl?: any
}


export function Store() {
    return (
        <>
            <div>Store</div>
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



import storeItems from "../data/items.json"
import {StoreItem} from '../components/StoreItem/StoreItem'

console.log(storeItems)

type storeItem = {
    key?:number,
    name?:string,
    price?:number,
    imgUrl?:string 

}

storeItems.map(item => {
    console.log(item)

})

let test = JSON.stringify(storeItems[0].name)
let image = JSON.stringify(storeItems[0].imgUrl)


export function Store() {
    return (
        <>
        <div>Store</div>
        <StoreItem name={storeItems[0].name} imgUrl={image} price={storeItems[0].price} key={storeItems[0].id}></StoreItem>
        </>
    )
}



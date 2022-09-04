import './styles.css'
import { useContext, useState, useEffect } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

type ItemCheck = {
    id?: number,
    name?: string,
    price: number,
    imgUrl?: string,
    quantity: number
}

export const Cart = () => {
    const [buyingList, setBuyingList] = useState<ItemCheck[]>([])
    const { showCart, cartItems } = useContext(ShoppingCartContext)
    const buyingListItem = cartItems.filter((item: ItemCheck) => {
        return item.quantity > 0
    })

    useEffect(() => {
        setBuyingList(buyingListItem)
    }, [cartItems])

    /*     If you are sure the property could not possibly have a null value, you can use the non-null assertion operator. The exclamation mark is the non-null assertion operator in TypeScript. We used it right after the address property, so we are telling TypeScript that buyingList!.map will never have a value of null or undefined. */

    let totalSum = 0
     for (let x = 0; x < buyingList!.length; x++) {
        totalSum += buyingList![x].price
    } 

    function finishBuy(){
        if(buyingList.length != 0){
        alert("Thanks for buying!!!")
    } else {
        alert("Please buy something!!!")
    }
}
    return (
        <div className={`main-div ${showCart! ? "show-cart" : null}`}>
            {
                buyingList!.map((item: ItemCheck) =>
                    <div className={`max-item-info ${showCart! ? "max-item-info-show" : null}`}>
                        <div className={`item-info ${showCart! ? "item-info-show" : null}`}>
                            <div className={`small ${showCart! ? "small-show" : null}`}>
                                <img src={item.imgUrl} className={`cart-image ${showCart! ? "cart-image-show" : null}`}></img> 
                            </div>
                            <div className={`item-total ${showCart! ? "item-total-show" : null}`}>
                                <p className={`small ${showCart! ? "small-show" : null}`}>{item.name}</p>
                                <p className={`small ${showCart! ? "small-show" : null}`}>R$ {item.price}</p>
                                <p className={`small ${showCart! ? "small-show" : null}`}>{item.quantity}</p>
                            </div>
                        </div>
                        <div className={`item-total ${showCart! ? "item-total-show" : null}`}>
                            <h3 className={`small ${showCart! ? "small-show" : null}`}>Item total</h3>
                            <p className={`small ${showCart! ? "small-show" : null}`}>R$ {((item.quantity) * (item!.price)).toFixed(2)}</p>
                        </div>
                    </div>
                )
            }
            <div className={`total-max ${showCart! ? "total-max-show" : null}`}>
                <h2 className={`small ${showCart! ? "small-show" : null}`}>Total</h2>
                <p className={`small ${showCart! ? "small-show" : null}`}>R$ {totalSum.toFixed(2)}</p>
            </div>
            <div className={`buy-button-div ${showCart! ? "buy-button-div-show" : null}`}>
                <button className={`buy-button ${showCart! ? "buy-button-show" : null}`} onClick={finishBuy}>Buy</button>
            </div>
        </div>
    )
}

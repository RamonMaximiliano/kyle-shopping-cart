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

    return (
        <div className={`main-div ${showCart! ? "show-cart" : null}`}>
            {
                buyingList!.map((item: ItemCheck) =>
                    <div className="max-item-info">
                        <div className="item-info">
                            <div>
                                <img src={item.imgUrl} className="cart-image" />
                            </div>
                            <div className="item-total">
                                <p>{item.name}</p>
                                <p>R$ {item.price}</p>
                                <p>{item.quantity}</p>
                            </div>
                        </div>
                        <div className="item-total">
                            <h3>Item total</h3>
                            <p>R$ {(item.quantity) * (item!.price)}</p>
                        </div>
                    </div>
                )
            }
            <div>
                <h2>Total</h2>
                <p>R$ {totalSum.toFixed(2)}</p>
            </div>
        </div>
    )
}

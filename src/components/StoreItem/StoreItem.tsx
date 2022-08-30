import './styles.css'

type ItemProps = {
    key?: number,
    id?: number,
    name?: string,
    price?: number,
    imgUrl?: any,
    quantity: number,
    plusItem?:(e:any)=> void,
    minusItem?:(e:any)=> void,
    setCartItems?:()=>void
}

export const StoreItem = ({ key, name, price, imgUrl, id,plusItem,minusItem,quantity,setCartItems }: ItemProps) => {
    let quantityNumber: number = Number(quantity)
    return (
        <div className="single-item">
            <img src={imgUrl} alt="test" />
            <div className="totalItem-info">
                <div className="item-info">
                    <h3>{name}</h3><p>R$ {price}</p>
                </div>
                <div>
                    {
                       quantityNumber >= 1 ?
                            <div className="item-buttons-div">
                                <div className="item-quantity-button">
                                    <button onClick={() => minusItem?.(id)}>-</button>
                                    <p>{quantity}</p>
                                    <button onClick={() => plusItem?.(id)}>+</button>
                                </div>
                                <button className="remove" >Remove</button>
                            </div>

                            :
                            <div className="item-buttons-div">
                                <button className="add-button" onClick={() => plusItem?.(id)}>+ Add to Cart</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}


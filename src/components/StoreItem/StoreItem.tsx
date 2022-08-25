import './styles.css'

type ItemProps = {
    key?: number,
    id?: number,
    name?: string,
    price?: number,
    imgUrl?: any
    quantity?: number
}


export const StoreItem = ({ key, name, price, imgUrl, id }: ItemProps) => {
    let quantity: number = 5
    return (
        <div className="single-item">
            <img src={imgUrl} alt="test" />
            <div className="totalItem-info">
                <div className="item-info">
                    <h3>{name}</h3><p>R$ {price}</p>
                </div>
                <div>
                    {
                        quantity >= 1 ?
                            <div className="item-buttons-div">
                                <div className="item-quantity-button">
                                    <button>-</button>
                                    <p>number</p>
                                    <p>in cart</p>
                                    <button>+</button>
                                </div>
                                <button className="remove">Remove</button>
                            </div>

                            :
                            <div className="item-buttons-div">
                                <button className="add-button">+ Add to Cart</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}


/* import './styles.css' */

type ItemProps = {
    key?:number,
    name?:string,
    price?:number,
    imgUrl?:string 
}

export const StoreItem = ( {key,name,price ,imgUrl }:ItemProps) => {
    return (
        <div>
            { name }
            {key}
            { price }
            <img src={imgUrl}/>
        </div>
    )
}


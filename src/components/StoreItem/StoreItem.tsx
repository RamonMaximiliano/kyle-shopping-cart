/* import './styles.css' */



type ItemProps = {
    key?:number,
    name?:string,
    price?:number,
    imgUrl?:any 
}


export const StoreItem = ( {key,name,price ,imgUrl }:ItemProps) => {
    return (
        <div>
            <p>{name}</p>
            <p>{key}</p>
            <p>{price}</p>
            <img src={imgUrl} alt="test"/>
        </div>
    )
}


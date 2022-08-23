import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/store'>Store</Link>
            <Link to='/about'>About</Link>
            <div className="cart-button">Cart</div>
            <img src='../../images/shopping-cart.png'/>
        </>
    )
} 


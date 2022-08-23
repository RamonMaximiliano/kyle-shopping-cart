import { Link } from 'react-router-dom'
import cart from '../../images/shopping-cart.png'
import './styles.css'

function test(){
    console.log("Hello there")
}

export const NavBar = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/store'>Store</Link>
            <Link to='/about'>About</Link>
            <button className="cart-button" style={{ backgroundImage: `url(${cart})` }} onClick={test}></button>
        </>
    )
}


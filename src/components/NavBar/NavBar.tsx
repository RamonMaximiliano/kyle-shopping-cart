import { Link } from 'react-router-dom'
import cart from '../../images/cart.png'
import './styles.css'

function test() {
    console.log("Hello there")
}

export const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-items">
                <Link to='/' className="nav-items-link"><p>Home</p></Link>
                <Link to='/store' className="nav-items-link"><p>Store</p></Link>
                <Link to='/about' className="nav-items-link"><p>About</p></Link>
            </div>
            <button className="cart-button" style={{ backgroundImage: `url(${cart})` }} onClick={test}></button>
        </div>
    )
}


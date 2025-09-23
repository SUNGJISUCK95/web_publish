import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { GiShoppingCart } from "react-icons/gi";

export function Header({cartCount}) {

    return(
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <LuShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className="header-right">
                    <Link to="/all">Products</Link> {/** Link의 to와 ㅁㅁ가 주소가 같아야하고(대소문자까지), 해당 부분은 a태그와 같다고 보면된다. */}
                    <Link to="/cart" className="header-icons-cart-link">
                        <GiShoppingCart className='header-icons'/>
                        <span className='header-icons-cart'>{cartCount}</span>
                    </Link>
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button type="button">Signup</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
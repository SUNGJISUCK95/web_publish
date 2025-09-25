import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../context/CartContext.js";

export function Header() {
    const { cartCount } = useContext(CartContext);

    // Login.jsx의 validateFormCheck부분에서 id,pwd를 입력해서 로그인하면 브라우저의 Local Storage에 입력한 값이 쌓인 후,
    // 아래 코드를 실행하면 Storage에 있는 값을 가져와 log에 출력한다. (parse를 해줘야 객체로 변환되서 사용가능)

    // useEffect(()=>{
    //     const loginInfo = localStorage.getItem("loginInfo");
    //     console.log('loginInfo', JSON.parse(loginInfo).userId); //문자열을 JSON 객체로 변환
    // },[]);

    return(
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <LuShoppingBag />
                    <span>Shoppy-hooks</span>
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
                    <Link to="/support">Support</Link>
                </nav>
            </div>
        </div>
    );
}
import { createContext, useContext, useState } from "react";

//1. 
export const CartContext = createContext();

//2. CartProvider는 CartContext를 사용하는 컴포넌트들의 범위를 정의
export const CartProvider = ({children}) => {
    //1. 장바구니 수량 관리 : setCartCount
    const [cartCount, setCartCount] = useState(0);
    const [cartList, setCartList] = useState([]);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount, cartList, setCartList }}>
            {children}
        </CartContext.Provider>
    );
}
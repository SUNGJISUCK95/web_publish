import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Products } from './pages/Products.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Cart } from './pages/Cart.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';

import { cartItemsCheck, updateCartItemsQty } from './utils/cart.js';

import './styles/cgvSignup.css';
import "./styles/cgv.css";
import './styles/shoppy.css';

export default function App() {
  //1. 장바구니 수량 관리 : setCartCount
  const [cartCount, setCartCount] = useState(0);
  
  //2. 장바구니 아이템 관리
  const [cartItems, setCartItems] = useState([]); //[{cartItem}, {...}]

  const addCart = (cartItem) => { // <-- ProductDetail 쇼핑백 추가 이벤트 처리
    //pid, size가 동일한 경우 qty 증가, cartItems 없는 경우 새로 추가 
    setCartItems(cartItemsCheck(cartItems, cartItem));
    setCartCount(cartCount + 1);
  };
  
  //리덕스를 사용하는이유?
  const updateCart = (cid, type) => {
    //console.log(cid, type);
    if(type === undefined) {
      const findItem = cartItems.find(item => item.cid === cid);
      setCartCount(cartCount - findItem.qty);

      setCartItems((cartItems) => {
          return cartItems.filter(item => !(item.cid === cid));
      });
    }else {
      setCartItems(updateCartItemsQty(cartItems, cid, type));   
      type === '+' ? setCartCount(cartCount + 1)
                  : cartCount > 0 ? setCartCount(cartCount - 1) : setCartCount(cartCount);
    }
  }

  console.log(cartItems, cartCount);
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartCount={cartCount}/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/all" element={<Products/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/cart" element={<Cart items={cartItems} updateCart={updateCart}/>}></Route>
          <Route path="/products/:pid" element={<ProductDetail addCart={addCart}/>}></Route> {/* /:pid 경로로 넘어가는 변수를 :으로 해서 변수명(pid)를 적용하여 사용 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



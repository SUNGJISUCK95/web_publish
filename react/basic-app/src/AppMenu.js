import './css/Menu.css';
import { Menu } from "./components/commons/Menu.jsx";
import { MenuList } from './components/menus/MenuList.jsx';
import { fetchData } from "./util/commonData.js"
import { useState, useEffect } from "react";
import { Logo } from './components/commons/Logo.jsx';

export default function App() {
    const [menus, setMenus] = useState({}); //menus의 type이 object이므로 {}로 값 받기
    
    useEffect(() => {
        const fetch = async () => {
            const data = await fetchData("/data/menus.json");
            setMenus(data);
        }
        fetch();
    }, []); 
    console.log(menus);

    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between", borderBottom:"1px solid #999", padding:"20px"}}>
                <MenuList menus={menus.headerLeft}/>
                <Logo src="/images/logoRed.png" alt="headerLogo" w="150px"/>
                <MenuList menus={menus.headerRight}/>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <MenuList menus={menus.headerCenter}/>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <MenuList menus={menus.footerTop}/>
            </div>
        </div>
    );
}
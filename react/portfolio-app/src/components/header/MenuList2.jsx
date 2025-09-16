import { useState } from "react";
import { Menu2 } from "./Menu2.jsx";

export function MenuList2() {
    const menus = [
        {
            "href": "#home",
            "name": "Home"
        },
        {
            "href": "#search",
            "name": "Search"
        },
        {
            "href": "#reservation",
            "name": "Reservation"
        },
        {
            "href": "#news",
            "name": "News"
        },
        {
            "href": "#contact",
            "name": "Contact"
        },
    ];

    const [active, setActive] = useState('Home');
    const handleClick = (name) => {
        setActive(name);
    }
    
    return(
        <nav>
            <ul className="header-menu">
                {
                    menus && menus.map((menu) => 
                        <li>
                            <Menu2 href={menu.href} className={active === menu.name ? "header-menu-item active" : "header-menu-item"} name={menu.name} click={handleClick} />
                        </li>
                    )
                }                
            </ul>                
        </nav>       
    );
}
/**
 * 메뉴 리스트
 */
import { Menu } from "./Menu.jsx";

export function MenuList({menus}) { //menus = [{menus}]
    return (
        <ul className="menu-list">
            {
                menus.map((menu) => 
                    <li>
                        <Menu title={menu.title} href={menu.href} color={menu.color} bg={menu.bg} />
                    </li>
                )
            }
        </ul>
    );
}
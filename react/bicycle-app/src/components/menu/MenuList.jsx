import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuAvatar } from './MenuAvatar.jsx';
import { getMenuList } from '../../feature/menu/menuAPI.js';

export function MenuList() {
    const dispatch = useDispatch();
    const menuList = useSelector((state) => state.menu.menuList);
    
    console.log(menuList);
    
    const [number, setNumber] = useState(3);

    useEffect(() => {
        dispatch(getMenuList(number));
    }, [number]);

    return(
        <div>
            {menuList && menuList.map((rowArray, idx) =>
                <div className="menu-list" key={idx}>
                    {rowArray && rowArray.map((menu, idx) =>                 
                        <MenuAvatar img={menu.image} name={menu.name} description={menu.description} key={idx}/>
                    )}
                </div>
            )}
        </div>
    );
}
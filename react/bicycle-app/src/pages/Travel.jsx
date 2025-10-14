import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { TravelMenu } from "../components/commons/TravelMenu.jsx";
import { getTravelMenuList } from '../feature/travel/travelAPI.js';

export function Travel() {
    const dispatch = useDispatch();
    const travelMenuList = useSelector((state) => state.travelMenu.travelMenuList);

    console.log(travelMenuList);

    const [number, setNumber] = useState(3);

     useEffect(() => {
            dispatch(getTravelMenuList(number));
    }, [number]);

    // 버튼들 보이기/숨기기 상태 관리
    const [showMenus, setShowMenus] = useState(false);
    const [showFoods, setShowFoods] = useState(false);
    const [showWalks, setShowWalks] = useState(false);

    const handleCoordinate = () => {
        setShowMenus(true); // 버튼들 보이게 상태 변경
    }

    // const handleFood = () => {
    //     setShowFoods(true); // 음식들 보이게 상태 변경
    //     setShowWalks(false);
    // }

    // const handleWalk = () => {
    //     setShowWalks(true); // 산책로들 보이게 상태 변경
    //     setShowFoods(false);
    // }
    
    return(
        <div className="content">
            <div className="center-layout travel-form">
                <div className="travel-left">
                    <nav className="travel-left-menus">
                        메뉴 영역<br/>
                        {/* showMenus가 true일 때만 버튼 보이기 */}
                        {showMenus && (
                          <>
                            {travelMenuList && travelMenuList.map((rowArray, idx) =>
                                { return rowArray && rowArray.map((travelMenu, idx) =>                 
                                    <TravelMenu name={travelMenu.name} key={idx}/>
                                )}
                            )}                     
                          </>
                        )}
                    </nav>
                    <div className="travel-left-detail">
                        상세페이지 영역<br/>
                        {/* showFoods가 true일 때만 버튼 보이기 */}
                        {showFoods && (
                          <ul className='food-list'>
                            <li className='food-list-item'>맛집1</li>
                            <li className='food-list-item'>맛집2</li>
                            <li className='food-list-item'>맛집3</li>
                            <li className='food-list-item'>맛집4</li>
                          </ul>
                        )}
                        {showWalks && (
                          <ul className='walk-list'>
                            <li className='walk-list-item'>산책로1</li>
                            <li className='walk-list-item'>산책로2</li>
                            <li className='walk-list-item'>산책로3</li>
                            <li className='walk-list-item'>산책로4</li>
                          </ul>
                        )}
                    </div>
                </div>
                <div className="travel-map">
                    지도 영역<br/>
                    <button type="button" onClick={handleCoordinate}>좌표</button>
                </div>
            </div>
        </div>
    );
}
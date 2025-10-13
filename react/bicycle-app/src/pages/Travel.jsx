import { useState } from 'react';

export function Travel() {
    // 버튼들 보이기/숨기기 상태 관리
    const [showMenus, setShowMenus] = useState(false);

    const handleCoordinate = () => {
        setShowMenus(true); // 버튼들 보이게 상태 변경
    }
    
    return(
        <div className="content">
            <div className="center-layout travel-form">
                <div className="travel-left">
                    <nav className="travel-left-menus">
                        메뉴 영역<br/>
                        {/* showMenus가 true일 때만 버튼 보이기 */}
                        {showMenus && (
                          <>
                            <button type="button" className="travel-menu">맛집</button>
                            <button type="button" className="travel-menu">산책로</button>
                          </>
                        )}
                    </nav>
                    <div className="travel-left-detail">상세페이지 영역</div>
                </div>
                <div className="travel-map">
                    지도 영역<br/>
                    <button type="button" onClick={handleCoordinate}>좌표</button>
                </div>
            </div>
        </div>
    );
}
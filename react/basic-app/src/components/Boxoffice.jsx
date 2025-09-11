import { useEffect, useState, useRef } from "react";
import { fetchKobisAPI, searchMoviePoster } from "../util/commonData.js";
import { BestProductImage } from "./shared/BestProductImage.jsx";
import { BestProductItem } from "./BestProduct.jsx";

export function Boxoffice() {
    const [list, setList] = useState([]);
    const hasRun = useRef(false); 
    // useRef는 index.js의 StrictMode가 테스트로 처음 데이터를 읽고난 뒤 본 코드가 두번째로 데이터를 읽는 것을 방지해주는 것 
    // 두번째 읽으면 데이터 수가 두배로 늘어나고, 중복 출력이 되기때문에
    // StrictMode는 켜두는 것이 권장사항이여서
    
    useEffect(() => {
        if(!hasRun.current){
            const fetchKobis = async () => {
                const kobis = await fetchKobisAPI("20250910");
                const mlist = kobis.boxOfficeResult.dailyBoxOfficeList;
                // console.log(mlist);
                
                // console.log(boxofficeList);
                for(const movie of mlist) {
                    if(movie.rank !== "10") { //API는 무조건 문자열
                        const poster = await searchMoviePoster(movie.movieNm, movie.openDt);
                        const posterObj = {
                            "img": poster,                       
                            "rank": movie.rank,
                            "title": movie.movieNm,
                            "like": true,
                            "icon": "💗",
                            "style": {"width": "600px", "height": "800px"},
                            "iconStyle": {
                                "bg": "coral", 
                                "color": "#fff",
                                "radius": "0",
                                "width": "40px",
                                "height": "40px"
                            }
                        }
                        // console.log(poster);                

                        // setList(prev => [기존데이터(...prev), 새로운 데이터(posterObj)]); 
                        // prev를 이용하여 posterObj의 배열값을 새로운 배열에 넣는다. 
                        // prev가 빈 배열 일때(현재의 list값): []
                        // ...은 스프레드 연산자(전개구문 연산자)이다
                        // 기존데이터의 배열의 수가 여러개이므로[ex) {0번지}, {1번지} 등] ...으로 표시한다.
                        setList(prev => [...prev, posterObj]);
                    }
                }
            }   
            fetchKobis();

            hasRun.current = true;
        } 
    }, []);
    
    // console.log(list.length);

    return (
        <div>
            <h2>박스오피스</h2>
            <ul className="best-product">                
                {
                    list.map((item, index) => 
                        (index === 0) ? 
                        <li key={index}><BestProductImage img={item.img} style={item.style} rank={item.rank} like={item.like} icon={item.icon} iconStyle={item.iconStyle} /></li> 
                        : 
                        <li key={index}><BestProductItem item={item} /></li> //key={index}를 넣어줌으로서 li를 유니크하게 구별할 수 있다.
                    )
                }
            </ul>
        </div>
    );
}
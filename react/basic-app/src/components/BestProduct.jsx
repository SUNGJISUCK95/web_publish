import { useState, useEffect } from "react";
import { fetchData } from "../util/commonData.js";
import { BestProductImage } from "./shared/BestProductImage.jsx";
import { BestProductContent } from "./shared/BestProductContent.jsx";

/**
 * 베스트 상품 컴포넌트
 */
export function BestProduct() {
    const [cartCount, setCartCount] = useState(0);
    const [bestProductList, setBestProductList] = useState([]); //배열일 경우 선언도 []로 하기

    const handleCartCount = () => {
        setCartCount(cartCount+1);
    }
    
    //컴포넌트 호출 시 데이터 로딩이 필요, 비동기 처리 --> useEffect Hooks 함수
    useEffect(() => { 
    //useEffect안에서 실행 된 값들은 useEffect 안에서만 살아있다. 
    //그래서 useState를 이용해서 전역으로 넘겨줌 (const [bestProductList, setBestProductList] = useState([]);)
        
        //방법1)
        // fetch("/data/best_products.json") //promise로 return 받음
        //     .then((response) => { return response.json()})
        //     .then( jsonData => 
        //         // console.log(jsonData)
        //         setBestProductList(jsonData) 
        //     )
        //     .catch(error => console.log(error));

        //방법2)
        // const fetchData = async () => {
        //     const response = await fetch("/data/best_products.json");
        //     const jsonData = await response.json();
        //     setBestProductList(jsonData);
        // }
        // fetchData();

        //방법3) //fetch 함수 생성 //이건 commonData.js 이용
        const fetch = async() => { //fetchData가 비동기 함수이므로 함수화하여 async, await 사용
            const result = await fetchData("/data/best_products.json");
            console.log('result => ', result);
            setBestProductList(result); //useState로 설정해 두어 setBestProductList로 bestProductList배열에 return값 저장
        } 
        
        fetch();

    }, []);

    return (
        <div>
            <h2>베스트 상품 : 🛒({cartCount})</h2>
            <ul className="best-product">                
                {
                    bestProductList.map((product, index) =>
                        (index === 0) ? 
                        <li key={index}><BestProductImage img={product.img} style={{width: "600px", height: "800px"}} rank={product.rank} like={product.like} cartCount={handleCartCount}/></li> 
                        : 
                        <li key={index}><BestProductItem item={product} cartCount={handleCartCount}/></li> //key={index}를 넣어줌으로서 li를 유니크하게 구별할 수 있다.
                    )
                }
            </ul>
        </div>
    );
}

/**
 * 베스트 상품 아이템 컴포넌트
 */
export function BestProductItem({item, cartCount}) {
    // console.log(item);

    return (
        <div>
            <BestProductImage img={item.img} style={{width: "200px", height: "300px"}} rank={item.rank} like={item.like} icon={item.icon} iconStyle={item.iconStyle} cartCount={cartCount} />
            <BestProductContent title={item.title} sale={item.sale} price={item.price} like={item.like} icon={item.icon}/>
        </div>
    );
}






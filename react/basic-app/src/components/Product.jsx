import { useState, useEffect } from "react";

/**
 * 베스트 상품 컴포넌트
 */
export function BestProduct() {
    const [cartCount, setCartCount] = useState(0);
    const [bestProductList, setBestProductList] = useState([]); 

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
        const fetchData = async () => {
            const response = await fetch("/data/best_products.json");
            const jsonData = await response.json();
            setBestProductList(jsonData);
        }
        fetchData();
           
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
            <BestProductImage img={item.img} style={{width: "200px", height: "300px"}} rank={item.rank} like={item.like} cartCount={cartCount} />
            <BestProductContent title={item.title} sale={item.sale} price={item.price} like={item.like} />
        </div>
    );
}

/**
 * 베스트 상품 컨텐츠 컴포넌트
 */
export function BestProductContent({title, sale, price, like}) {
    return (
        <div className="best-product-content">
            <p className="best-product-content-title">{title}</p>
            <span className="best-product-content-sale">{sale}</span>
            <span className="best-product-content-price">{price}</span>
            { (like) ? <span className="best-product-content-like ">🤍</span> : "" }
        </div>
    );
}

/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img, style, rank, like, cartCount}) {
    const handleAddCart = () => {
        // console.log(`add cart`);
        cartCount();
    }

    return (
        <div className="best-product-img">
            <ProductImage img={img} style={style} />
            <span className="best-product-img-no">{rank}</span>
            { (like) ? <span className="best-product-img-like" onClick={handleAddCart} >🛒</span> : "" }
        </div>
    );
}

/**
 * 상품 이미지 컴포넌트
 */
export function ProductImage({img, style}) {
    const { width, height } = style; //구조분해할당 //style의 값을 width, height 각 변수에 값 넣기

    return (
        <img src={img}
             style={{width:width, height:height}} />
    );
}
import { ProductImage } from "./ProductImage.jsx";
import { Icon } from "../commons/Icon.jsx";

/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img, style, rank, like, cartCount, icon, iconStyle}) {    
    const handleAddCart = () => {
        // console.log(`add cart`);
        cartCount();
    }

    // const {bg, color, radius, width, height} = iconStyle || {} ; 
    // index.js의 StrickMode가 해제되어 있는 경우, 개발자가 객체, 배열들을 코드로 체크하는 로직
    // iconStyle || {}은 iconStyle이 null이 아니면 사용하겠다 라는 뜻이다 
    // 데이터 체크 방식

    const {bg, color, radius, width, height} = iconStyle;
    // index.js의 StrickMode 있는 경우, 객체, 배열들을 코드로 체크하는 로직
    // StrickMode 있는 경우는 위 방법으로 데이터 체크해주면 된다.
    // 권장사항은 StrickMode가 있는 경우이다.

    return (
        <div className="best-product-img">
            <ProductImage img={img} style={style} />
            <Icon value={rank} bg={bg} color={color} radius={radius} width={width} height={height} />
            { (like) ? <span className="best-product-img-like" onClick={handleAddCart} >{icon}</span> : "" }
        </div>
    );
}

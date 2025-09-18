import React, { useEffect, useState } from 'react';
import { ProductAvatar } from './ProductAvatar.jsx';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';

export function ProductList() {
    const [rows, setRows] = useState([]);
    const [number, setNumber] = useState(3); 
    //useState는 값이 바뀌면 number를 사용하는 모든 컴포넌트들(useEffect 등)에게 변경사항을 전달하고 업데이트한다.

    useEffect(() => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json"); //비동기
            const rows = groupByRows(jsonData, number); //groupByRows()로 1차원인 jsonData를 2차원 배열로 변경한다 //dataFetch.js에 있음
            setRows(rows); //동기
        }

        load();

    }, [number]);
    
    // console.log("list --> ", list);

    return (
        <div>
            {rows && rows.map((rowArray, idx) => 
                <div className='product-list' key={idx}>
                    {rowArray && rowArray.map((product, idx) => {
                            return <ProductAvatar img={product.image} key={idx}/>
                        }
                    )}
                </div>
            )}
        </div>
    );
}

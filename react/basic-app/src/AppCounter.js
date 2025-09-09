import { Counter } from "./components/Counter.jsx";
import './App.css';
import { useState } from "react";

//자식    >    부모(누적합)   >    자식(결과 전송)
//[이벤트 함수 필요]  [프롭스(Props)필요]

export default function App() {
    const [total, setTotal] = useState(0);

    const add = (type) => { // 자식 컴포넌트의 클릭이벤트 결과 가져오기
        if(type === "+"){
            setTotal(total+1);        
        }else if(type === "-") {
            setTotal(total-1);        
        }else if(type === "초기화") {
            setTotal(0);
        }
        // console.log(`number --> ${number}, total --> ${total+number}`);
    }

    return (
        <>
            <h1>Counter Test</h1>
            <Counter click={add} total={total}/>
            <Counter click={add} total={total}/>
        </>
    );
}
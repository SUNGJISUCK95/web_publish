import { Counter } from "./components/Counter.jsx";
import './App.css';
import { useState } from "react";

//자식    >    부모(누적합)   >    자식(결과 전송)
//[이벤트 함수 필요]  [프롭스(Props)필요]

export default function App() {
    const [total, setTotal] = useState(0); //변수의 상태관리
    const [init, setInit] = useState(0); //자식 초기화 : 0, 1 값을 토글(Toggle) 
    //useState로 변경된 값은 자동으로 자식들에게 넘어가서 업데이트 됨

    const click = (type) => { // 자식 컴포넌트의 클릭이벤트 결과 가져오기
        if(type === "+"){
            setTotal(total+1);        
        }else if(type === "-") {
            setTotal(total-1);        
        }else if(type === "초기화") {
            setTotal(0);
            setInit(!init) // !init은 "초기화"로 click함수 실행 될때마다 0과 1을 번갈아 받음           
        }
        // console.log(`number --> ${number}, total --> ${total+number}`);
    }

    return (
        <>
            <h1>Counter Test</h1>
            <Counter click={click} total={total} init={init}/>
            <Counter click={click} total={total} init={init}/>
        </>
    );
}
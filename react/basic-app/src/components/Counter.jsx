import { useState } from "react"; // hoc을 이용한 언어들로 hocs라고 한다.
                                  // 사용하려면 import해줘야 한다.

export function Counter({click, total}) {
    //방법1) javascript 방식
    // let total = 0;

    //방법2) hoc 방식
    const [number, setNumber] = useState(0);

   
    const handleClickDecrement = () => {  
        //방법1) javascript 방식   
        // if(total != 0){ 
        //     total--;  
        // } 
        // document.querySelector("span").textContent = total;      
        
        //방법2) hoc 방식
        if(number > 0){
            setNumber(number-1); //1감소
            click("-"); //부모에게 number 전달
        }
        //3항 연산식
        //if(total > 0) ?  setTotal(total-1) : setTotal(0);
        
        console.log(`클릭완료 --> ${number-1}`); 
    };
    
    
    const handleClickIncrement = () => {
        //방법1) javascript 방식     
        // total++;   
        // document.querySelector("span").textContent = total;       
        
        //방법2) hoc 방식
        if(number < 10){
            setNumber(number+1); //1증가
            click("+"); //부모에게 number 전달
        }  
        //3항 연산식
        //if(total < 10) ?  setTotal(total+1) : setTotal(10);
        
        console.log(`클릭완료 --> ${number+1}`); 
    };

    const handleClickInit = () => { 
        //방법1) javascript 방식
        // total = 0;

        //방법2) hoc 방식
        setNumber(0); //초기화
        click("초기화");
    }

    return (
        <div className="counter-container">
            <div>
                <span className="number">{number}</span> 
                <span>/</span>
                <span className="total-number">{total}</span>
            </div>
            <div>
                <button type="button" onClick={handleClickDecrement}>▼</button>
                <button type="button" onClick={handleClickIncrement}>▲</button>
                <button type="button" onClick={handleClickInit}>초기화</button>
            </div>
        </div>
    );
}
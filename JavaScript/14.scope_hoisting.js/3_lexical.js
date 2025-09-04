/**
 * 
 */

{ //전역 스코프 //전역 스코프의 {}는 선언 안해도 디폴트로 되어있음
    const a = 1; //전역 변수
    const b = 100;
    console.log(a);
    
    { //블록1 스코프
        const a = 2; //지역 변수
        const d = 300;
        console.log(a);
        // console.log(c); // c는 스코프({})가 하위 스코프에 있으므로 출력 불가능

        { //블록2 스코프
            const a = 3; //지역 변수
            const c = 1000;
            console.log(a);
            console.log(b); //b는 전역 변수라 출력가능 
            console.log(d); //d는 스코프({})가 상위 스코프에 있으므로 출력가능
                 
        }
    }
}
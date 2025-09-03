/**
 * 단계적으로 비동기 처리 함수를 실행하는 경우
 * - 첫번째 호출 함수 결과 --> 두번째 함수 인자
 * ...
 */

function step1(initNo) {
    let result1 = initNo + 1;
    // callback(result1);
    return Promise.resolve(result1);
}

function step2(initNo) {
    let result2 = initNo + 1;
    // callback(result2);
    return Promise.resolve(result2);
}

function step3(initNo) {
    let result3 = initNo + 1;
    // callback(result3);
    return Promise.resolve(result3);
}

//0 + 1 = reuslt1
step1(0) //step1의 매개변수를 0으로 사용
    .then((result1) => {
        console.log(result1);
         
        //result1 + 1 = result2          
        return step2(result1);  //step2의 매개변수를 result1로 사용
      
    })
        .then((result2) => {
            console.log(result2);
            
            //result2 + 1 = result3
            return step3(result2); //step3의 매개변수를 result2로 사용            
        })
            .then((result3) => {
                console.log(result3);
            })
    .catch(error => console.log(error));

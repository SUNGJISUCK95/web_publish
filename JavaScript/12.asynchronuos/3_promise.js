/**
 * 비동기 처리 함수 또는 로직을 실행해주는 대리자 역할을 함
 * - resolve, reject 결과를 반환
 * - 실행결과는 promise객체.then(callback).catch(callback)
 * - then() : resolve로 반환(성공)
 * - catch() : reject로 반환(실패)
 */

//순차적으로 처리하고 하는 비동기식 코드를 포함한 함수에 async를 붙인다.
async function asyncTest() { 

    let dataArray = null;

    //비동기 처리 객체
    let promise1 = new Promise((resolve, reject) => { //callback 함수 형식 : () => {} 또는 function() {} //후자 보단 전자를 많이 씀 
                                                    //Promise는 비동기 클래스이므로 먼저 백그라운드로 보내짐
        let numbers = [1, 2, 3, 4, 5];
        console.log(numbers); //console.log는 즉시 실행함수 이므로 비동기에 있어도 바로 실행 
                            //콜백함수 가지고 있는게 나중에 실행
        resolve(numbers);
    });

    // promise1
    //     .then(callback : 성공시 실행 함수) // Promise의 실행이 성공하면 resolve로 .then 실행
    //     .catch(callback : 실패시 실행 함수); // 실패하면 reject로 .catch 실행

    //1. 비동기 처리
    await promise1 //await는 처음 실행하고 싶은 비동기 처리 선언
                   //await는 async가 없으면 사용불가 
        .then((result) => dataArray = result) 
        .catch((reject) => console.log(`-----> error, reject`)); 

    //2. 동기식
    console.log(dataArray);
        
}

asyncTest();
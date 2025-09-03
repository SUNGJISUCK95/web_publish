/**
 * Pizza 주문 처리 로직
 * - 1. 주문
 * - 2. 피자 만들기
 * - 3. 배달
 */


// console.log(`1. 주문 완료`);

// setTimeout(() => {
    //     console.log(`2. 피자 완성`); //task queue에 올라가고 callstack에서 실행하는 시간까지 더해서 5초이상으로 시간이 걸린다.
// }, 5000);

// console.log(`3. 배달 완료`);
    
// ↓로 순서대로 실행하도록 수정
async function pizzaOrder() {
    console.log(`1. 주문 완료`);

    let makePizza = new Promise((resolve, reject) => { //Promise 타입으로 리턴하는 경우 async, await를 사용한다.
        setTimeout(() => {
            console.log(`2. 피자완성`);
            resolve();
        },2000);
    }); 

    await makePizza 
        .then((resolve) => console.log(`--> resolve`))
        .catch((reject) => console.log(`--> reject`));

    console.log(`3. 배달 완료`);
}

pizzaOrder();
/**
 * callback(콜백함수) : 함수의 파라미터로 입력되는 익명함수 
 */
const job = (a, b, callback) => { //callback 을 mdn사이트에서는 functionRef라고 명명 되어있다.
    callback(a, b);
}

const print = (a, b) => {
    console.log(a, b);
}

job(1, 2, print); //동기식 
//job을 호출하면 a = 1, b = 2, callback = print함수 주소가 된다.
//즉 print함수로 1, 2를 사용한다.

//setTimeout 함수 호출 : 비동기식
//원래 Window.setTimeout()인데 Window 생략이 가능하다. //parseInt도 같음
//setTimeout은 비동기식 처리를 하므로, 백그라운드에 저장된 후
//이벤트 루프를 통해 호출되어 콜스택에서 처리될 떄 자신이 포함한
//콜백 함수를 실행한다.
//setTimeout(callback, delay);

//setTimeout(print(1, 2)); 방식 X
//setTimeout(print(1, 2), 1000); 방식 X //1000은 1초이다.
//print는 메모리에 내장되어있는 함수이기 때문에 작업이 끝나면 print가 사라진다. 그래서 실행이 안된다. 
//그래서 직접 callback함수를 선언하여 가지고 다니면서 사용해야한다.

console.clear();

console.log(`동기식 처리--> 1`);
console.log(`동기식 처리--> 2`);

setTimeout(() => {
    console.log(`setTimeout 호출(비동기)--> #1`);
}, 3000); 

console.log(`동기식 처리--> 3`);

setTimeout(() => {
    console.log(`setTimeout 호출(비동기)--> #2`);
}, 1000); 

console.log(`동기식 처리--> 4`);


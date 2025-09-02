/**
 * ...(Spread Operator) : 전개구문
 * - 객체가 가지고 있는 요소를 전개하는 연산자
 * - iterable object 객체, object literal({..})에서 사용
 * - [...객체], {...객체}
 */

//배열 객체 복사, 결합 : shallow copy
let numbers = [1, 2, 3];
let copyNumbers = [...numbers];
let concatNumbers = [...numbers, 100, '🍕', ...copyNumbers]; //타입이 다르게 넣을 수 는 있지만 권장하지 않음

console.log(numbers);
console.log(copyNumbers);
console.log(concatNumbers);

//오브젝트 리터럴 객체 복사 
const hong = {
    name: '홍길동',
    age: 20
};

//홍길동 업데이트 : 이름, 나이, 직업
const hongUpdate = {
    ...hong,
    jop: '개발자'
}

const list = [
    {...hong}, {...hongUpdate} //{}로 묶어서 안에있는 요소만 펼쳐놓기
];

console.log(hong); // { name: '홍길동', age: 20 }
console.log(hongUpdate); // { name: '홍길동', age: 20, jop: '개발자' }
console.log(list); // [ { name: '홍길동', age: 20 }, { name: '홍길동', age: 20, jop: '개발자' } ]

/**
 * iterable(순회) object : Iteration protocol을 준수하고 있는 객체
 * - for..of 구문
 * - ...(Spread operator:스프레드 연산자) : 블록안에서 객체의 데이터를 전개 복사, 펼쳐놓음
 * - ...(Rest parameter : 나머지 인자) : 매개변수에서 파라미터 매핑
 * - ...(Destructring object : 구조분해 할당) : 객체의 구조를 분해하여 대입하는 변수에 자동으로 매핑
 * - String, Array, Set, Map 
 */

function test(a, b, ...numbers) { // 이게 나머지 인자
    // ...numbers // 이게 스프레드 연산자
}

// let [a, b, c] = ...numbers; //let numbers = [a, b, c] // 이게 구조분해 할당

// 문자열 객체 생성 - "Hello~ JavaScript World!!"
const str = new String("Hello~ JavaScript World!!");
console.log(`str.length = ${str.length}`);

// for(요소 of 객체){
    
// }
for(const text of str){ // 구문에서는 const를 더 많이씀
    console.log(text);    
}

console.clear();
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}

console.clear();
const numbers2 = new Number(12345); //Number는 iterable 객체(object)가 아니라서 for..of 사용불가
// for (const num of numbers2) {
//     console.log(num);
// }


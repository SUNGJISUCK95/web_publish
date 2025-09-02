/**
 * destructure : 구조 분해 할당
 * - 객체의 구조를 분해하여 대입하는 변수에 자동으로 할당
 */

//1. 배열 객체
let numbers = [1, 2, 3, 4, 5];
let aa = numbers;
let bb = numbers[2];
let [a, b, ...nlist] = numbers; //구조분해 할당

console.log(`aa = ${aa}`);
console.log(`bb = ${bb}`);
console.log(`a = ${a}`); // 1
console.log(`b = ${b}`); // 2
console.log(`nlist = ${nlist}`); // 3, 4, 5
console.log(`nlist[0] = ${nlist[0]}`); // 3

//2. 오브젝트 리터럴
console.clear();
let hong = {
    name: '홍길동',
    age: 20,
    job: '개발자'
}
// let name = hong.name;
// let age = hong.age;
// let job = hong.job;
let {name, age, job} = hong; //구조분해 할당 //위 객체(object)로 정의된 것을 풀어서 사용할 때 사용
console.log(`name = ${name}`);
console.log(`age = ${age}`);
console.log(`job = ${job}`);

//오브젝트 리터럴을 반환하는 함수
function createObject() {
    return {
        name2: `apple`,
        emoji: '🍕',
        color: 'red'
    };
}

// let {name2, emoji, color, price=100} = createObject(); //새로 요소를 추가하고 싶으면 적으면된다.(price=100)
let {price=100, name2, color, emoji} = createObject(); //위 오브젝트와 선언 순서가 달라도 상관없다.(이름이 중요)
console.log(name2);
console.log(emoji);
console.log(color);
console.log(price);

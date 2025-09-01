//MDN 사이트의 Array 클래스 메소드 참조!!

let numbers = [1, 2, 3, 4, 5];
let furuits = new Array('🍕', '🍔', '🍗');
console.log(`numbers.length = ${numbers.length}`);

//1. push() - 배열 요소 추가
numbers.push(6);
console.log(numbers); //[ 1, 2, 3, 4, 5, 6 ]
numbers.push(7,8,9);
console.log(numbers); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

furuits.push('🌭');
console.log(furuits); //[ '🍕', '🍔', '🍗', '🌭' ]

//2. keys() : 배열의 인덱스 추출 후 iterator에 저장
console.clear();
let iterator = furuits.keys();
let iterator2 = Object.keys(furuits); //위와 동일
console.log(iterator);

for(const key of iterator) {
    console.log(key);
}

//3. 배열의 요소 삭제 : pop(), splice()
console.clear();

//3-1 pop() : 마지막 요소 삭제
console.log(`furuits.pop() = ${furuits.pop()}`); //배열의 마지막 요소 삭제
console.log(furuits);

//3-2 splice(시작인덱스, 삭제갯수, 교체아이템...)
console.log(`furuits.splice(0, 1, '🌮') = ${furuits.splice(0, 1, '🌮')}`);
console.log(furuits);

//삭제 카운트가 0이면 새로운 아이템 추가
console.log(`furuits.splice(0, 0, '🍝') = ${furuits.splice(0, 0, '🍝')}`); //0번지는 신규 삽입
console.log(furuits);

//4. 배열 요소 추출 : slice(시작주소, 종료주소), 새로운 배열 객체 리턴
console.log(furuits.slice(3)); //인덱스 3부터 마지막까지

//4-1. 얕은 복사(Shallow Copy) : 별도의 독립된 객체로 생성
console.clear();
let f1 = ['🍕', '🍔', '🍟'];
let f1_copy = f1.slice();
let f1_copy2 = [...f1]; //...(spread operator:전개구문)

console.log(f1);
console.log(f1_copy);
console.log(f1_copy2);

f1.pop(); //감튀 삭제
console.log(f1, f1_copy, f1_copy2);

//5. concat() : 배열객체 결합
console.clear();
let n1 = [1,2,3];
let n2 = [4,5,6];
console.log(n1.concat(n2));
console.log([...n1, ...n2]);
console.log([100, ...n1, ...n2], 1000);

let objList = [
    {name: '홍길동', age: 10},
    {name: '고길동', age: 20},
    {name: '김길동', age: 30}
];
let objList2 = [...objList];
console.log(objList2);

//6. join() : 배열의 문자요소를 string으로 반환
let ff = ['🍕', '🍔', '🍟'];
console.log(ff); // 배열 객체
console.log(ff.join()); // 문자열 객체

/**
 * 배열은 참조데이터 타입, 힙(heap)에 저장
 * 배열이란? 
 * - 동일한 데이터 타입을 가진 요소들을 물리적인 연속된 저장소에 저장, 인데스로 구분
 * - 배열은 참조데이터 타입, 힙(heap)에 저장
 * - [], Array 클래스를 이용하여 객체 생성
 * - 배열의 저장 요소는 기본 데이터타입, 참조 데이터타입
 */

let array1 = new Array();
let array2 = new Array(1, 2, 3);
let array3 = new Array(5);

console.log(`array1.length --> ${array1.length}`); //0
console.log(`array2.length --> ${array2.length}`); //3
console.log(`array3.length --> ${array3.length}`); //5

let names = ['홍길동', '이순신', '김유신'];
let furuits = ['🍕', '🍔', '🍗'];

console.log(`names.length --> ${names.length}`); //3
console.log(`furuits.length --> ${furuits.length}`); //3

console.log(`name[2] = ${names[2]}`);
names[2] = '홍길순';
console.log(`name[2] = ${names[2]}`);
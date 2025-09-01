/**
 * Math 클래스의 메소드 : static으로 정의됨
 * - Math.상수명, Math.메소드명()
 */

let a = 123.456;

console.log(`Math.abs(value) --> ${Math.abs(a)}`); //절대값
console.log(`Math.floor(value) --> ${Math.floor(a)}`); //인수보다 작거나 같은 수 중에서 가장 큰 정수를 반환합니다
console.log(`Math.trunc(value) --> ${Math.trunc(a)}`); //소수점 삭제
console.log(`Math.round(value) --> ${Math.round(a)}`); //반올림
console.log(`Math.max(1,2,3,4,5) --> ${Math.max(1,2,3,4,5)}`); //최대값
console.log(`Math.min(1,2,3,4,5) --> ${Math.min(1,2,3,4,5)}`); //최소값

//자릿수별 절삭
let b = 123.456;
let result = Number(b.toPrecision(5)); 
//맨 앞자리부터 절삭 + 반올림
//소수점 뒷 부분은 절삭하면 반올림이 된다.

console.log(result);

//임의의 숫자 반환
console.clear();
console.log(`Math.random() --> ${Math.floor(Math.random()*1000 + 1)}`); 
//random이 0~1사의 값을 랜덤으로 출력(random)하여 원하는 자리수까지 곱하고 나머지 소수점 버림(floor)

//1~100 사이의 숫자를 임의로 변환
let rnum = Math.floor(Math.random() * 100 + 1);
console.log(`Math.random() --> ${rnum}`); 

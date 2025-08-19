/**
 * 논리연산자: &&(and), ||(or)
 * 
 * 논리식1  &&   논리식2 = 결과값
 * true    &&   true = true
 * true    &&   false = false
 * false   &&   true = false (shortcut)
 * false   &&   false = false (shortcut)
 *false
 * 
 * 논리식1  ||   논리식2 = 결과값
 * true    ||   true = true (shortcut)
 * true    ||   false = true (shortcut)
 * false   ||   true = true
 * false   ||   false = false
 */

let a = 1;
let b = 2;

console.log('AND ---------------');
console.log((a < b) && (a < b));
console.log((a < b) && (a > b));
console.log((a === b) && (a < b));
console.log((a === b) && (a > b));
 
console.log('OR -----------------');
console.log((a < b) || (a < b));
console.log((a < b) || (a > b));
console.log((a === b) || (a < b));
console.log((a === b) || (a > b));

console.log('ShortCut -----------');
//입력받은 조선은 비교하여 1 ~ 9 까지 범위의 수를 출력
let number = 11;
if((number > 0) && (number < 10)); //true && false
if((number < 10) && (number > 0)){ //false && true
// &&의 ShortCut은 false 조건이 먼저 실행되어야 한다. 그래야 두번째 조건까지 안가도 된다.
    console.log(`result = true`);
} else {
    console.log(`result = false`);
}

//입력받은 숫자가 0보다 크면 출력
let number2 = 11;
if((number > 0) || (number > 1000)){ 
// ||의 ShortCut은 true 조건이 먼저 실행되어야 한다. 그래야 두번째 조건까지 안가도 된다.
    console.log(`result = true`);
} else {
    console.log(`result = false`);
}
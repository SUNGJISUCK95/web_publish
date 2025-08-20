/**
 * switch(조건:숫자, 문자) ~ case
 * switch(숫자) {
 *      case 숫자 : 실행문; break;
 *      case 숫자 : 실행문; break;
 *      case 숫자 : 실행문; break;
 *      default 실행문;
 * }
 */

// 선택한 요일을 출력 : 0-월요일, 1-화요일, 2-수요일
let useage = `0-월요일, 1-화요일, 2-수요일`;
let day = 2;
let resultDay = undefined;

console.log(useage);

switch (day) {
    case 0:
        resultDay = '월요일';
        break;
    case 1:
        resultDay = '화요일';
        break;
    case 2:
        resultDay = '수요일';
        break;
    default:
        console.log("요일을 선택해주세요.");        
        break;
}

console.log(`선택한 요일은 [${resultDay}] 입니다.`);

//입력받은 값이 홀수면 빨간사과, 짝수면 초록사과 출력
let number = 101;
let result = undefined;

switch (number % 2) {
    case 0:
        result = '짝수🍏';
        break;
    case 1:
        result = '홀수🍎';
        break
    default:
        console.log('잘못 입력된 값 입니다.');
        break;
}
console.log(result);

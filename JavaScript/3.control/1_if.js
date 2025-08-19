/**
 * if, if ~ else, if ~ else if... ~ else
 * 삼항연산자 : (조건문) ? true : false;
 */

//입력되는 파일명이 apple인 경우에만 이모지 출력
//apple  이외의 과일은 이름 출력
let fruit = 'apple';
if( fruit === 'apple') {
    console.log('🍎');    
} else {
    console.log(fruit);
}

//위의 if문을 삼항연산자로 변환
let reuslt = undefined; //기본형 데이터 초기화
(fruit === 'apple') ? result = '🍎' : result = fruit;
console.log(`result -> ${result}`);

//선택한 메뉴를 출력
let menus = ['pizza', 'hotdog', 'coffee'];
let selectMenu = 'coffee';
if(selectMenu === menus[0]) {
    console.log('🍕');
} else if(selectMenu === menus[1]){
    console.log('🌭');
} else if(selectMenu === menus[2]){
    console.log('☕');
} else {
    console.log('메뉴 중비중~');
}

//입력받은 숫자가 홀수이면 사과이모지, 짝수이면 포도이미지 출력
let inNumber = 101;
let fresult = undefined;

if(inNumber % 2 === 1) {
    fresult = '🍎';
} else {
    fresult = '🍇';
}
console.log(`결과 -> ${fresult}`);

// 삼항 연산식 
(inNumber % 2) ? fresult = '🍎' : fresult = '🍇';
console.log(fresult);
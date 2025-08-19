/**
 * 비교 연산자 : >, <, >=, <=, ==(값), ===(값+데이터)
 */
console.log(3 > 2); //true
console.log(3 < 2); //false
console.log(3 >= 2); //true
console.log(3 <= 2); //false
console.log(3 == '3'); //true //시스템 내부 엔진이 문자열을 정수형으로 변환해서 비교해준다.
console.log(3 === '3'); //false //===로 타입까지 비교한다.
console.log(3 == 'A'); //false //3 == 65 //A의 아스키 코드의 값은 65이다.
console.log(3 === 'a'); //false

let obj1 = {
    name: '홍길동'
};

let obj2 = {
    name: '홍길동'
};
console.log('참조형 -----');
console.log(obj1 == obj2);
console.log(obj1.name == obj2.name);
console.log(typeof obj1 === typeof obj2);

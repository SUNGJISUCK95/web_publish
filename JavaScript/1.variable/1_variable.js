/**
 * ECMA Script 2015 이후 버전 기본으로 정리함
 * 변수 선언 키워드 : var, let, const
 * 형식 : 키워드 변수명 = 데이터 값;
 */

//name 이라는 변수에 홍길동 저장
let name1 = "홍길동";
let name2 = '홍길동';
console.log(name1);
console.log(name2);

//number 변수에 100을 저장
let number = 100;
let dnumber = 100.123;
console.log(number);
console.log(dnumber);

//flag 변수에 true 저장
let flag = true;
console.log(flag);

//name1 다른 값을 저장하는 경우
name1 = 200; //위에 name1은 '홍길동'인데 200으로 값을 새로 주어 타입이 자동으로 변경되었다. (이게 JAVA와의 차이)
console.log("name--> ",name1);

//상수값으로 정의 후 사용
const cname = "홍길동"; //const로 정의 함으로써 변수의 값 변경을 불가능 하도록 함 ("홍길동"만 가능)
// cname = "이순신"; //에러 발생 :: const는 변수값을 재정의할 수 없다.
console.log("cname--> ", cname);


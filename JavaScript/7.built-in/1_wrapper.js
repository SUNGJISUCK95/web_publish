/**
 * 기본형(원시) 데이터 타입 - number, string, boolean, null, underfined
 * 기본 데이터 타입에 클래스 형식으로 정의한 데이터 타입을 wrapper 클래스라고 함
 */

//number 클래스 형식
let a = "123";
if(typeof a === "string") {
    parseInt(a);
}
console.log(typeof a, a); //string, 123

if(a == "123") {//값만 비교
    console.log(typeof a, a); //string, 123
}

//둘다 생성가능
const nobj1 = new Number(123);
const nobj2 = new Number("123");

//instanceof Number는 Number타입인지 체크
console.log(nobj1 instanceof Number, nobj1); //true
console.log(nobj2 instanceof Number, nobj2); //true
console.log(nobj1 == nobj2); //false는 주소값은 다르기 때문에 출력된다.
console.log(nobj1.valueOf() == nobj2.valueOf()); //true는 값을 비교해서 출력된다.

let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;
console.log(maxValue, minValue); //Number타입의 가장 큰 수, 가장 작은 수 출력

//String : 문자열 클래스
console.clear();
let str1 = new String("Hello");
let str2 = new String("Hello");

console.log(str1, str1.length, str1.valueOf());
console.log(str2, str2.length, str2.valueOf());
console.log(str1 == str2); //false는 주소값은 다르기 때문에
console.log(str1.valueOf() == str2.valueOf()); //true는 값은 같아서

//Boolean : 블리언 클래스
console.clear();
let flag1 = true;
let flag2 = new Boolean(true);

console.log(flag1 == flag2); //true는 bool타입은 두가지 밖에 없어서 주소값이 달라도 알아서 처리해줌
console.log(flag1.valueOf() == flag2.valueOf()); //true는 값은 같아서


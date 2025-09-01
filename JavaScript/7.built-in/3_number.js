/**
 * Number 클래스 메소드
 * - valueOf()
 * - toLocaleString()
 */
let a = 100;
let b = new Number(100);

console.log(a == b); //첫 비교값(a)이 기본값이면 후 비교값(b)까지 가서 Number타입으로 비교함 //그래서 true가 나옴
console.log(a.valueOf() == b.valueOf()); //값은 같으므로 true

let aa = 1234567;
let bb = new Number(1234567);
console.log(aa.toLocaleString()); //3자리씩 끊어주는 함수 //숫자타입만 사용가능하다 //문자열이면 parseInt로 바꿔주고 해야함
console.log(bb.toLocaleString());

let aaa = 123.75;
console.log(aaa.toFixed()); //소수점 첫째 자리에서 반올림해주는 함수

/**
 * String 문자열 클래스 메소드
 * - split(), slice(), charAt()...
 */

let name = "홍길동";
let sname = new String("홍길동");

console.log(typeof name, typeof sname); //string타입, object타입
console.log(name == sname); //name이 기본타입이므로 sname의 String 타입으로 자동으로 변환하여 비교함 //그래서 true
console.log(name == sname.valueOf()); //값은 같으므로 true

let str = "Hello~ JavaScript World!!";
console.log(str.length);
console.log(str.charAt(5)); //str의 5번째 자리 문자인 '~'을 출력 //0번째 부터 시작
console.log("Welcome to " + str);
console.log("Welcome to ".concat(str)); //concat은 문자열 뒤에 문자열 붙이는 함수
console.log(str.toLowerCase()); // 전부 소문자 출력
console.log(str.toUpperCase()); // 전부 대문자 출력

//문자열 추출
// console.log(str.substring(시작주소, 종료주소)); 
console.log(str.substring(0, 2)); // 종료주소 -1까지 출력
console.log(str.substring(4, 10)); // 4번쨰 부터 9번째까지 출력
console.log(str.slice(0, 2)); // 종료주소 -1까지 출력
console.log(str.slice(4)); // 지정한 지점이 하나인 경우 주소에 값 이후 데이터 출력

//문자열 공백 삭제
console.clear();

let text = '               Hello~ Javascript!!               ';
console.log(text.trim());

//문자열을 구분자를 이용하여 배열객체로 생성
let fruits = '사과, 레몬, 토마토, 오렌지, 키위';
let flist = fruits.split(','); //','를 기준으로 문자열을 나누고 배열에 저장
console.log(fruits); //사과, 레몬, 토마토, 오렌지, 키위
console.log(flist); //[ '사과', ' 레몬', ' 토마토', ' 오렌지', ' 키위' ]
console.log(flist[2]); // 토마토
if(flist[1].trim === '레몬') { //flist의 레몬은 ' 레몬'으로 공백이 포함되어 있어 같은 값이 아니다. 
                              //그래서 trim 사용 후 비교
    console.log(flist[1]); 
}else {
    console.log(flist[0]);
}



/**
 * Date 날짜 형식 클래스
 * - Date 클래스 생성후 getFullYear(), getDay()....
 */

console.log(Date.now()); //1970년도를 기준으로 시간을 계산해서 출력함 //1756697593539 //now는 사용 권장하지 않음
console.log(new Date()); //2025-09-01T03:35:07.667Z //해당 함수를 사용 권장

let date = new Date();
console.log(date.getFullYear()); //2025
console.log(date.getMonth() + 1); //9 //2000년 밀레니엄 버그 문제로 +1을 해줘야한다.
console.log(date.getDay()); //1

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();

console.log(`${year}년 ${month}월 ${day}일`);
console.log(date.toLocaleDateString('ko-KR')); // 날짜 한국버전
console.log(date.toLocaleDateString('en-US')); // 날짜 영문버전

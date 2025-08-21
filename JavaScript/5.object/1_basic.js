/**
 * object : 
 * - {}, 다양한 데이터 타입을 저장
 * - object literal 형식은 { property : value, ...}
 */

//학생 성적 관리 프로그램 - object literal를 활용하여 학생 개인의 성적관리 설계
const hong = {
    name: '홍길동',
    kor: 100,
    eng: 100,
    math: 100
}

hong.name = '김철수'; //hong 자체는 const라서 바꿀 수 없지만 hong안의 개체 하나는 따로 변경이 가능하다
hong.math = 90;
delete hong.math; //개체를 삭제할때 사용

console.log(hong);
console.log(`이름 : ${hong.name}`);
console.log(`국어 : ${hong.kor}`);
console.log(`영어 : ${hong.eng}`);
console.log(`수학 : ${hong.math}`);

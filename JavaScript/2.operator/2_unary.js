/**
 * 단항 연산자 : ++, --, !, !!
 */
let a = 10;
console.log(++a); //증가 후 11 출력
console.log(a++); //11 출력 후 증가
console.log(a); //위에서 두번 증가해서 12

let b = 10;
console.log(--b); //출력: 9, 메모리: 9
console.log(b--); //출력: 9, 메모리: 8
console.log(b++); //출력: 8, 메모리: 9
console.log(++b); //출력: 10, 메모리: 10
console.log(b); //10

let flag = true;
console.log(flag); //true
console.log(!flag); //false
console.log(!!flag); //부정의 부정이라는 뜻, 출력: true

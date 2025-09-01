/**
 * 최상위 객체인 Window 객체가 가지고 있는 메소드
 * - parseInt(), parseFloat(), alert(), confirm()...
 */

let a = "123.456";
console.log(parseInt(a)); //123
console.log(parseFloat(a)); //123.456

//encodeURI, decodeURI : Global object
let uri = "http://www.naver.com?name=홍길동";
let encodeUri = encodeURI(uri); //원래 주소를 encode하여 보안 처리함
let decodeUri = decodeURI(encodeUri); //decode는 encode한걸 원래 형태로 돌려놓음

console.log(uri); //http://www.naver.com?name=홍길동
console.log(encodeUri); //http://www.naver.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99
console.log(decodeUri); //http://www.naver.com?name=홍길동 

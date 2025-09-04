/**
 * 호이스팅(Hoisting) : 파일이 호출되면 실행 전 객체[ex) function]를 메모리에 생성하고 로드(저장)하는 작업
 * - function 키워드로 정의된 함수
 */

//javascript는 인터프리터 방식이다. (한줄 한줄 읽어나가는 방식) 
//대신 인터프리터 방식이 적용 되긴 전에 먼저 전체적으로 한번 읽고(호이스팅) 그 뒤에 인터프리터로 읽는다.

test1(); //그래서 전체적으로 한번 읽었기 때문에 실행문이 함수보다 앞에 있어도 실행된다. 
console.log(test1); //stack frame 저장되는 변수명(객체주소 저장)


function test1() { //호이스팅(전체적으로 한번 읽음) 작업이 선행 됨
    console.log("--> test1");    
}

test1();

/**
 * ECMAScript 기준으로 let, const로 정의된 함수는 호이스팅 작업이 선행되지 않음
 */

// test2(); //test2는 객체가 아니므로 호이스팅 작업이 선행 안된다.

//변수형 함수
const test2 = () => { //const는 호이스팅 작업이 선행 안됨
    console.log("--> test2");
}

// let test2 = () => { //let은 호이스팅 작업이 선행 안됨
//     console.log("--> test2");
// }

test2();

// test3(); //let, const면 호이스팅 작업의 선해이 무조건 안된다.

let test3 = function() {
    console.log('--> test3');
}

test3();
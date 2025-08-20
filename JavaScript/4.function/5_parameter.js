/**
 * 함수 호출 --> 파라미터 --> 함수의 매개변수에 매핑
 * Rest Pramiter(래스트 파라미터) : 여러 개의 파라미터를 전송시 사용
 */

console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5, 6, 7, 8));
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13));

function add(... numbers) {
    //for문 방법

    // let sum = undefined;
    // for(let i=0; i < numbers.length; i++){
    //     sum += numbers[i];
    // }

    //reduce 방법

    let sum = numbers.reduce((acc, cur) => {return acc+cur}); 
    //reduce는 배열을 돌아가면서 자동으로 누적값들을 사용한다.
    //실행된 값을 변수에 넣어주려면 return을 입력해야한다.
    //reduce는 배열 한정으로 사용가능하다.

    return sum;
}

// console.clear();
console.log(add2(1, 2, 3, 4));
console.log(add2(1, 2, 3, 4, 5, 6, 7, 8));
console.log(add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13));

function add2(a, b, ... numbers) { //a와 b는 정확하게 변수로 받고 나머지값은 numbers 배열로 받는다.
    //for문 방법

    // let sum = a + b;
    // for(let i=0; i < numbers.length; i++){
    //      sum += numbers[i];
    // }

    //reduce 방법

    let sum = a + b + numbers.reduce((acc, cur) => {return acc + cur}); 
    //acc, cur은 변수명으로 다른것을 사용해도 되나 기본적으로 저렇게 사용됨
    
    return sum;
}
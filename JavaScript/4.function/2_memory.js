/**
 * 함수 생성 및 호출
 */

import {toNumber} from '../commons/utill.js'

add(100, 200); //function은 함수 생성 전에 호출 가능 (Hoisting[호이스팅] 작업 O)

function add(num1, num2) {
    let obj = toNumber(num1, num2);
    console.log(`sum = ${obj.num1 + obj.num2}`);    
}
//또는
// function add(num1, num2) {
//     if(typeof num1 === 'string' && typeof num2 === 'string') {
//         num1 = parseInt(num1);
//         num2 = parseInt(num2);
//     }
//     let num3 = num1 + num2;
//     console.log(`sum = ${num3}`, typeof num1, typeof num2);
// }

add('100', '200');

//Arrow function //Arrow function은 생성 전에 호출 불가 (Hoisting[호이스팅] 작업 X)
const min = (num1, num2) => { 
    let obj = toNumber(num1, num2);
    if(obj.num1 > obj.num2) {
        console.log(`min = ${obj.num1 - obj.num2}`);        
    } else {
        console.log(`값이 올바르지 않습니다.~`);                
    }
}

min(200, 100);
min('200', '100');




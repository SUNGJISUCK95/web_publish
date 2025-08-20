/**
 * 반복문 : for, while
 * for - 정확한 반복 횟수를 알고 있는 경우
 * while - 종료하는 조건을 알고 있는 경우
 * 
 * for((1)초기값; (2)조건식; (4)증가값;){
 *      (3)실행문;
 * }
 * - (1) 초기값은 let으로 선언한다. const는 값이 안변해서 안됨
 */

//1 ~ 10 까지 출력
for (let i = 1; i < 11; i++) { //let으로 선언 안하면 default로 var이 들어가기 때문에 let을 선언해준다.
    console.log(`number = ${i}`);    
}

//숫자 배열을 출력
let numbers = [1, 3, 5, 7, 9];

for (let i = 0; i < numbers.length; i++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);    
}

//과일이 레몬이면 이모지 출력
let fruits = ['사과','오렌지','레몬'];
let emojis = ['🍎','🍊','🍋'];

for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    let emoji = emojis[i];
    if(fruit === '레몬'){
        console.log(`${fruit} = ${emoji}`);
    }
}
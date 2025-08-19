/**
 * 객체형
 * Class, Array([]), Object({})
 * Array 형식 : [데이터, 데이터...]
 * Object 형식 : {
 *                  프로퍼티: 데이터,
 *                  프로퍼티: 데이터,
 *                  프로퍼티: 데이터,
 *                  ...
 *               }
 */
let apple = null;
apple = {
            // 'name':'apple',
            // 'color':'red',
            // 'emoji':'🍔' //window + . 으로 이모지 가능            
            name : 'apple',
            color : 'red',
            emoji : '🍔' //node.js에서는 key부분에 ''가 없어도 사용가능하다.         
        };

console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);

//orange 객체 정의 및 생성
let orange = {
    name : 'orange',
    color : 'coral',
    emoji : '🍗'
};

console.log(orange.name);
console.log(orange.color);
console.log(orange.emoji);
console.log(orange);

//Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers);

let fruits = [apple, orange];
console.log(fruits);
console.log(fruits[0].emoji);
console.log(fruits[1].emoji);


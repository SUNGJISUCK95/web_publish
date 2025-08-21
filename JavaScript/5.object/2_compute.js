import { setObject, getObject, updateObject, deleteObject } from '../commons/utill.js';

const person = {
    name: '홍길동',
    age: 20,
    job: '개발자'
}

const fruits = {
    name: 'apple',
    emoji: '🍎'
}

console.clear();

setObject(person, 'address', '강남구')
console.log(person);

let job = getObject(person, 'job');
console.log(job);

updateObject(person, 'age', 32);
console.log(person);

deleteObject(person, 'name');
console.log(person);

setObject(fruits, 'color', 'red')
let e = getObject(fruits, 'emoji');
updateObject(fruits, 'color', 'green');
deleteObject(fruits, 'emoji');

console.log(fruits);
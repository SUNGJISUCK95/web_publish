/**
 * iterable object를 순회하여 데이터 가져옴
 * - for(const 로컬변수 of 객체) { 실핼문; }
 */

//배열의 요소를 교체하는 함수 생성
function replace([...array], origin, target) { //replace(배열, 원래있는요소, 바꾸는요소) 
                                               //[...array]는 []감싸서 스프레드 연산자이다.
                                               //(origin, target, ...array)여야 나머지 인자이다.
    for (let item of array) {
        let index = 0;
        if(item === origin){
            array.splice(index, 1, target);
        }
        index++;

        //또는
        // let count = 0;
        // if(item === origin){
        //     array[count] = target;
        // }
        // count++;       
    }

    return array;
}

//배열의 요소를 교체하는 함수 생성 : forEach
function replace2([...array], origin, target) {
    let copyArray = Array.from(array);

    copyArray.forEach((item, index) => {
        if(item === origin){
            copyArray.splice(index, 1, target);
        }
    });

    return copyArray;
}

//배열의 요소를 교체하는 함수 생성 : map 함수
function replace3(array, origin, target){
    return array.map((item, index) => { //map : 새로운 배열을 생성 //새로 배열을 만든 것이므로 array를 return 필요
        if(item === origin){
            item = target;
        }
        return item;
    }); 
    // 축약
    // return array.map((item) => (item === origin) ? item = target : item);
                               //      (조건문)      ? 요소 =  true  :  false; //3항 연산자
}

let furuits = new Array('🍕', '🍔', '🍗');
let fresult = replace(furuits, '🍕', '🌭');
let fresult2 = replace2(furuits, '🍕', '🌮');
let fresult3 = replace3(furuits, '🍕', '🍝');

console.log(furuits);
console.log(fresult);
console.log(fresult2);
console.log(fresult3);


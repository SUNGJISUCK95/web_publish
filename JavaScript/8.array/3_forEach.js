/**
 * forEach 메소드는 Iterator 심볼 객체를 상속한 객체에서 제공됨
 * - 배열.forEach(callbackFn);
 */

let furuits = new Array('🍕', '🍔', '🍗');
furuits.forEach((item) => { //()에 element(item), index, array 순으로 입력 
                            //명칭은 변수여서 원하는대로 넣으면 됨
                            //item:요소, index:자리, array:배열
    console.log(item);
}); 

//🍔를 🌮로 교체
furuits.forEach((item, index) => {
    if(item === '🍔'){
        furuits.splice(index, 1, '🌮');
    }
});
console.log(furuits);

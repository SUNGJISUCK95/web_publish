/**
 * while - 종료되는 조건을 알고 있는 경우
 * while(조건식) {
 *      실행문;
 * }
 */

//1 ~ 10까지 출력
//5까지 출력하고 종료
let flag = 1;
let count = 1;
while (flag) {    
    console.log(count);
    count++;
    if(count === 6){
        //break; 또는
        flag = 0;
    }
}

//메뉴 선택
let menu = 1;
let flag2 = true;
while (flag2) {
    console.log(`0:🍕, 1:🍔, 2🍗`);
    if(menu === 0){
        console.log(`🍕`);
        flag2 = false;
    }
    else if(menu === 1){
        console.log(`🍔`);
        flag2 = false;
    }
    else if(menu === 2){
        console.log(`🍗`);
        flag2 = false;
    }
}
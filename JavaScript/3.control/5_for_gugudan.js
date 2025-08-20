/**
 * 구구단 출력 : 2 ~ 9단 출력
 */

for (let i = 1; i < 11; i++) {
    let rows = '';
    for (let j = 2; j < 10; j++) { 
        rows += `${j} * ${i} = ${j*i}\t`;
    }
    console.log(rows);    
}

/**
    *
    **
    ***
    ****
    ***** 
    5행 별 찍기
 */
for (let i = 1; i < 6; i++) {
    rows = '';
    for (let j = 0; j < i; j++) {
        rows += `*`;     
    }
    console.log(rows);
}

/**
 * 초록사과 찍기, 3행 줄만 빨간사과 출력
 */
for (let i = 1; i < 6; i++) {
    rows = '';
    for (let j = 0; j < i; j++) {
        if(i != 3){
            rows += `🍏`;
        }else{
            rows += `🍎`;
        }  
    }
    console.log(rows);
}

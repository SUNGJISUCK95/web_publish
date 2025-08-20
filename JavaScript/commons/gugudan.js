/**
 * 싱글 구구단 - 단 하나를 매개변수로 입력받아 출력
 */
export function singleGugudan(dan) { //보내는 쪽에서는 export로 설정해놔야 받는 쪽에서 import가 가능함
    for(let i=1; i<10; i++) {
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
}

export function multiGugudan(start, end) {
    for(let i=1; i<=9; i++) {
        let rows = '';
        for(let j=start; j<=end; j++){
            rows += `${j}*${i} = ${i*j}\t`;
        }
        console.log(rows);
    }
}
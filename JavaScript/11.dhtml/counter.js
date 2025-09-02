//숫자 증가/감소 함수
function counter(a) {
    let number = document.querySelector("#number").textContent;
    
    //1 증가/감소
    let num = parseInt(number);
    if(a == 1){
        num++;
    } else if(a == 0){
        if(num > 0){
            num--;
        }    
    }
       
    document.querySelector("#number").textContent = num;
}

//숫자 증가 함수
function increment() {
    // alert('increment');
    let number = document.querySelector("#number").textContent;
    
    //1증가
    let num = parseInt(number);
    num++;
    document.querySelector("#number").textContent = num;
    // console.log(`number = ${number}`);
}

//숫자 감소 함수
function decrement() {
    // alert('decrement');
    let number = document.querySelector("#number").textContent;
    
    //1감소
    let num = parseInt(number);
    if(num > 0){
        num--;
        document.querySelector("#number").textContent = num;
    }
    // console.log(`number = ${number}`);
}
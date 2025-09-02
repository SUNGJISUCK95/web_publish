//최초로 호출되는 함수 : window.onload(), window.addEventListener()...
window.addEventListener('DOMContentLoaded', function() {
    initForm();
});

function initForm() {
    //버튼 이벤트 적용
    let output = 
    `
        <h1>Counter</h1>
        <div>
            <h2 id="number">0</h2>
            <button type="button" class="button" data-operation="increment">increment(+)</button>
            <button type="button" class="button" data-operation="decrement">decrement(-)</button>
        </div>
    `;

    document.querySelector("#content").innerHTML = output;

    //버튼 이벤트 적용
    let buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let number = document.querySelector("#number").textContent;
            let type = button.dataset.opertarion;
            
            if(type === 'increment'){
                if(number >= 0) document.querySelector('#number').textContent = ++number;
            }else{
                if(number > 0) document.querySelector('#number').textContent = --number;
            }
            // console.log(number, type);
        });
    });
}


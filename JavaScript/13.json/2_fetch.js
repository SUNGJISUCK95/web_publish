/**
 * fetch() : 데이터(JSON...) 파일을 호출하여 데이터를 가져오는 함수
 */

//최초로 호출되는 함수 : window.onload(), window.addEventListener()...
window.addEventListener('DOMContentLoaded', function() {
    showResult();
});

//data.json 데이터 가져오기
async function getData() { // async가 붙은 함수는 전체가 비동기로 옮겨진다.
    let response = await fetch("./data.json"); // 1. 비동기 // 먼저 실행 할 실행문에 await를 붙인다.
    return response.json(); // 2. 동기 // 가져온 json파일의 데이터만 뽑기 // responce객체가 null이여서 []를 안해주면 에러가 뜬다
}

// const data = 
// [
//     {
//         "name": "홍길동",
//         "age": 20,
//         "address": "서울시"
//     },
//     {
//         "name": "이순신",
//         "age": 30,
//         "address": "아산시"
//     },
//     {
//         "name": "김유신",
//         "age": 40,
//         "address": "전주시"
//     }
// ];

async function showResult() { //window.addEventListener로 showResult()를 먼저 실행하도록 선언해놔서 비동기에서 먼저 실행되고 getData값을 호출한다.
    let data = await getData(); // 1. 비동기

    let output = // 2. 동기
    `
        <h1>Fetch 함수 테스트</h1>
        <table border=1>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            ${ //javascript 언어, 변수 등을 입력할 때 ${}로 묶는다.
                data.map((obj) => 
                    `
                        <tr>
                            <th>${obj.name}</th>
                            <th>${obj.age}</th>
                            <th>${obj.address}</th>
                        </tr>
                    `
                ).join("")
            }
        </table>
    `;

    console.log(output);
    
    document.querySelector("#content").innerHTML = output;
}
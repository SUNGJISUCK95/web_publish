/**
 * fetch() : 데이터(JSON...) 파일을 호출하여 데이터를 가져오는 함수
 */

//최초로 호출되는 함수 : window.onload(), window.addEventListener()...
window.addEventListener('DOMContentLoaded', function() {
    // getJson();
    showResult();
});

async function getJson() {
    // JSON 파일 문자열 또는 객체 console에 출력 방법
    // fetch("./data.json")
        // .then((response) => {
        //     return response.json();            
        // })
        //     .then((jsonData) => {
        //         let jsonData2 = JSON.stringify(jsonData); // stringify는 JSON파일을 한 줄 문자열로 바꿔주는 역할
        //                                                   // 배열로 사용 하려면 stringify를 안하면 됨
        //         console.log(jsonData2);  

        //         let jsonData3 = JSON.parse(jsonData2); // parse는 문자열로 된 JSON파일을 객체(Object)(배열)로 바꿔주는 역할
        //         console.log(jsonData3);
                                                       
        //         jsonData3.forEach(obj => {
        //             console.log(obj.name, obj.age, obj.job);                           
        //         });
        //     })
        // .catch((error) => {
        //     console.log(error);
        // });

    let response = await fetch("./data.json"); // fetch는 비동기 함수 
                                               // fetch는 return타입이 promise이므로 await를 붙일 수 있다.
    return response.json();    
}

async function showResult() {
    //1. getJson() 결과 가져오기
    let data = await getJson(); //getJson함수도 return타입이 promise이므로 비동기식을 가지고 있어 비동기함수이고 await를 붙여 순차 실행을 시켜줘야한다.

    //2. output 변수에 html 코드 저장
    let output = 
    `
        <table border=1>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
            </tr>
            
            ${
                //for..of 또는 map() 사용해야함
                data.map((item) => 
                `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.job}</td>
                   </tr>
               `).join("") //join은 배열에 있는걸 문자열로 묶어줌
            }
        </table>
    `;

    console.log(output);
    
    //3. innerHTML로 output 출력
    document.querySelector("#content").innerHTML = output;
}


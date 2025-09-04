//최초로 호출되는 함수 : window.onload(), window.addEventListener()...
window.addEventListener('DOMContentLoaded', function() {
    showResult('20250101');
});

/**
 * KMDB 영화 포스터 검색
 */
async function searchMoviePoster(movieNm, openDt) {
    const key = '59H5F0U0OFQB3R2261VM';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    
    return jsonData.Data[0].Result[0].posters.split("|")[0];
}

async function getAPI(sdate) {
    // kobis api 연동
    let key = "6fad455ddb5c4c93694c87e249d7cb41";
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    // `(백틱)이 들어 갔가는건 변수를 사용한다는 얘기다.                             
    let response = await fetch(url);
    // console.log(response.json());
    return response.json();
}

async function showResult(sdate) {
    // getAPI();
    let kobis = await getAPI(sdate);
    let posterList = [];
    let kobisobj = kobis.boxOfficeResult;
    let mlist = kobisobj.dailyBoxOfficeList;

    for(const movie of mlist){ //movie의 movieNm과 openDt 데이터들로 searchMoviePoster 함수로 이미지 데이터들을 찾아 posterList에 배열로 저장
        let name = movie.movieNm;
        let date = movie.openDt;
        let poster = await searchMoviePoster(name, date.split("-"));
        posterList.push(poster);
    }

    // console.log(posterList);
    

    // console.log(kobis.boxOfficeResult.boxofficeType);
    // console.log(kobis.boxOfficeResult.showRange);
    // console.log(kobis.boxOfficeResult.dailyBoxOfficeList);
    
    let output = 
    `
        <div >
            <span>검색일 : </span>
            <input type="text" id="searchDate" placeholder="- 제외 예) 20250903">
            <button type="button" id="searchBtn">검색</button>
        </div>
        <h3>타입 : ${kobisobj.boxofficeType}</h3>
        <h3>일자 : ${kobisobj.showRange}</h3>
        <div style="display: flex; gap: 20px">
            <img src="${posterList[0]}" id="poster"/>
            <table border=1>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>매출액</th>
                </tr>
                ${
                    mlist.map((movie, index) => 
                        `
                            <tr class="movieInfo" id="${posterList[index]}">
                                <td>${movie.rank}</td>
                                <td>${movie.movieNm}</td>
                                <td>${movie.openDt}</td>
                                <td>${parseInt(movie.salesAmt).toLocaleString()}원</td> 
                            </tr>
                        ` //movie.salesAmt는 문자열이여서 parseInt로 숫자로 바꿔주고 toLocalString으로 3자리씩 ,로 나눠준다.
                    ).join("")
                }
            </table>
        </div>
    `;

    document.querySelector("#content").innerHTML = output; //output 이 실행된 뒤에 button이 생기기 때문에 output 다음에 button실행 이벤트를 넣어야한다.
        
    //검색 버튼 이벤트 추가
    document.querySelector("#searchBtn").addEventListener('click', () => {
        // alert("검색 버튼 클릭");
        let sdate = document.querySelector("#searchDate").value.trim();
        // alert(sdate);
        showResult(sdate);        
    });

    //테이블 로우별 마우스 이벤트 적용
    let rows = document.querySelectorAll(".movieInfo"); //클래스가 movieInfo인 요소를 모두 가져온다. //그래서 배열임
    // console.log(rows);
    rows.forEach(row => {
        //마우스 올리면 배경색 회색
        row.addEventListener('mouseover', () => {
            let imgURL = row.id;
            row.style.background = "gray";
            // console.log(`row.id ---> ` + row.id);
            document.querySelector("#poster").src = imgURL;
        });

        //마우스 내리면 배경색 흰색
        row.addEventListener('mouseout', () => {
            row.style.background = "white";
        });
    });
    
}

// {"kobis":
//     {
//      "boxOfficeResult": 
//         {
//          "boxofficeType": "일별 박스오피스",
//          "showRange": "20250903~20250903",
//          "dailyBoxOfficeList": 
//              [
//                 {
//                    "rnum": "1",
//                    "rank": "1",
//                    "rankInten": "0",
//                    "rankOldAndNew": "OLD",
//                    "movieCd": "20253289",
//                    "movieNm": "극장판 귀멸의 칼날: 무한성편",
//                    "openDt": "2025-08-22",
//                    "salesAmt": "837970040",
//                    "salesShare": "46.1",
//                    "salesInten": "24451280",
//                    "salesChange": "3",
//                    "salesAcc": "36677934590",
//                    "audiCnt": "79521",
//                    "audiInten": "5537",
//                    "audiChange": "7.5",
//                    "audiAcc": "3396081",
//                    "scrnCnt": "1609",
//                    "showCnt": "5026"
//                 },
//             ]   
//         }
//     }
// }

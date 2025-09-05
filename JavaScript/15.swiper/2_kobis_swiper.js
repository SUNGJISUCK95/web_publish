// 인터프리터의 순차 실행때문에 script문이 먼저 읽어지는데 Swiper함수 안에 .swiper(class)가 없어서 실행이 안되고 넘어감
// 그래서 addEventListener로 인터프리터로 html부분까지 전부 출력 후 해당 함수가 실행가능하도록 설정
// DOM 트리 생성(body 실행) 후 DOMContentLoaded 함수 처리
window.addEventListener('DOMContentLoaded', function() {
   createSwiper();
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

/**
 * KOBIS 일별 박스오피스 가져오는 함수
 */
async function getAPI(sdate) {
    // kobis api 연동
    let key = "6fad455ddb5c4c93694c87e249d7cb41";
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    // `(백틱)이 들어 갔가는건 변수를 사용한다는 얘기다.                             
    let response = await fetch(url);
    // console.log(response.json());
    return response.json();
}

//날짜 생성 함수
function createSdate() {
    let today = new Date;
    let year = today.getFullYear();
    let month = today.getMonth() + 1; //month가 넘버 타입이라 문자열 수로 체크해서 if문 하면 안됨
    let day = today.getDay() - 1;
    month = month < 10 ? "0"+month : month; //3항 연산자
    day = day < 10 ? "0"+day : day;

    // console.log(`${year}${month}${day}`);
    return `${year}${month}${day}`;
}

//Swiper 생성 함수
async function createSwiper() {
    let sdate = createSdate();

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
    
    let output =
    `
        <!-- Slider main container -->
        <div class="swiper">
        <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                 ${
                    mlist.map((movie, index) => 
                        `
                            <div class="swiper-slide" >
                                <img class="swiper-img" src="${posterList[index]}"/>
                            </div>
                        ` //movie.salesAmt는 문자열이여서 parseInt로 숫자로 바꿔주고 toLocalString으로 3자리씩 ,로 나눠준다.
                    ).join("")
                }
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
    `;

    document.querySelector("#content").innerHTML = output;

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        autoplay: {delay: 3000},
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar-drag',
        },
    });
}
/**
 * KMDB 영화 포스터 검색
 */
export async function searchMoviePoster(movieNm, openDt) {
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
 * KOBIS 영화 일별 박스 오피스
 */
export async function fetchKobisAPI(sdate) {
    // kobis api 연동
    let key = "6fad455ddb5c4c93694c87e249d7cb41";
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${sdate}`;
    // `(백틱)이 들어 갔가는건 변수를 사용한다는 얘기다.                             
    let response = await fetch(url);
    // console.log(response.json());
    return response.json();
}


/**
 * 데이터 처리 공통 모듈
 */
export async function fetchData(url) {
    const response = await fetch(url); // "/data/best_products.json"
    const jsonData = await response.json();
    return jsonData;
}
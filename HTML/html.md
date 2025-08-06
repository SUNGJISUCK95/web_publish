## 1. HTML(HyperText Markup Language)
- '팀 버너스'가 개발, W3C에서 HTML 버전 등 관리
- 태그로 불리우며, 시작태크<>, 종료태크</>로 구성
  또는 시작과 종료가 하나의 태그로 구성된 경우도 있음
  ex) <h1>내용</h1>, <br/> 등...
- 태그 구성요소
  <시작태그 속성(attribute)= '속성내용' 등...> 내용 </종료태그>
- 모든 컨텐츠는 태그로 작성되어야 함 --> CSS, JS에서 적용 가능하도록...

## 2. 웹표준
- HTML5 + CSS3 + JQuery ::: 2010년도 중반
- 틀, 구조 : HTML
- 모양, 스타일 : CSS
- 동작, 이벤트 : JavaScript, JQuery

## 3. 블록 레벨
- 태그 생성 시 블록 레벨이 정의되어 생성됨
- 브라우저 전체 크기(width 기준): block
- 가로길이 디폴트 값은 100%
- heding 태그(h1~h6), div, p 태그 등..
- 블록 레벨은 다른 태그를 포함할 수 있다. 일부 태그(div, p ..)
  예) <div>
        <h1>~</h1>
        ...
      </div>
- 다른 태그를 포함하는 태그는 레이아웃 설정 시 사용됨
  : header, main, section, footer, div 등...
- 다른 레벨 형식으로 수정 시 display 속성을 이용함
  예) <h1 style="display:inline;">인라인 레벨로 변경</h1>
- style 속성으로 사이즈를 변경할 수 있다.

## 4. 인라인 레벨 - 한문자로 인식
- 태그 생성 시 인라인 레벨로 정의됨
- 컨텐츠 내용 크기 : inline
- span, button, a 등...
- 인라인 레벨 태그는 인라인 레벨 태그만 일부 포함 가능
  예) <span> <a href="">다음</a> </span>
- 다른 레벨 형식으로 수정 시 display 속성을 이용함
  예) <span style="display:block;"> 블록 레벨로 변경 </span>
- style 속성으로 사이즈를 변경할 수 없다. => block, inline-block으로 변경 후 크기변경 가능

## 5. 인라인-블록 레벨 
- 크기는 인라인 적용되며, 사이즈 조정은 블록처럼 사용되는 태그
- img, video 태그 등이 있음
- 다른 레벨 형식으로 수정 시 display 속성 이용
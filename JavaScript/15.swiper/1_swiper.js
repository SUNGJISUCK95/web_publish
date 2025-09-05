// 인터프리터의 순차 실행때문에 script문이 먼저 읽어지는데 Swiper함수 안에 .swiper(class)가 없어서 실행이 안되고 넘어감
// 그래서 addEventListener로 인터프리터로 html부분까지 전부 출력 후 해당 함수가 실행가능하도록 설정
// DOM 트리 생성(body 실행) 후 DOMContentLoaded 함수 처리
window.addEventListener('DOMContentLoaded', function() {
   createSwiper();
});   

//Swiper 생성 함수
function createSwiper() {
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
        
        
        
        

        
        
        
        

        
        
        
        
        

        
        
        
        
        
        
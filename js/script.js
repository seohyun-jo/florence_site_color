// 채팅창 아이콘, 닫기버튼
$(document).ready(function(){
  // 아이콘 클릭 시 토글
  $(".icon_chat").click(function(e){
    e.preventDefault();
    $(".chat_box").fadeToggle(300); // 부드럽게 토글
  });

  // 채팅버튼 닫기 버튼 클릭 시 닫힘
  $(".chat_close").click(function(){
    $(".chat_box").fadeOut(300);
  });
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 900) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.icon_chat').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.icon_chat').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

// 화면 이동시 부드럽게 움직이기
$(function() {
				$('a[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				$('html, body').animate({
				scrollTop: target.offset().top
				}, 500);//움직이는 시간 조정
				return false;
				}
				}
				});
				});

// 베스트셀러 메인 이미지
// $(function(){
//     $(".slide li").hide();
//     $(".slide li:nth-child(1)").show();
//     setInterval(function(){
//         $(".slide li:nth-child(1)").fadeOut().next().fadeIn().end().appendTo(".slide")
//     },3000);
// });
$(function () {
  var $slides = $(".slide li");
  var currentIndex = 0;
  var slideCount = $slides.length;

  $slides.hide();
  $slides.eq(currentIndex).css('z-index', 10).fadeIn(0);

  setInterval(function () {
    var $currentSlide = $slides.eq(currentIndex);
    var nextIndex = (currentIndex + 1) % slideCount;
    var $nextSlide = $slides.eq(nextIndex);

    $nextSlide.css('z-index', 20).fadeIn(800);

    $currentSlide.fadeOut(800, function () {
      $currentSlide.css('z-index', 1).hide();
      currentIndex = nextIndex;
    });
  }, 3000);
});
// 베스트 셀러 하트
 $(function () {
    $(".heart").click(function () {
        let $this = $(this); // 클릭된 요소만 선택

        $this.toggleClass("on");

        if ($this.hasClass("on")) {
            $this.attr("src", "images/heart1_h.png");
        } else {
            $this.attr("src", "images/heart1.png");
        }
    });
});
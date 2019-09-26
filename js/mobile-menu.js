var nav = $('.navigation');
var btn = $('.btn-menubar');

// 버튼을 클릭했을 때 네비게이션 요소에 nav-act 클래스를 추가한다.
btn.on('click', function(e){
  e.preventDefault();
  nav.toggleClass('nav-act');
});
var viewport = window.matchMedia('(max-width:999px)');
$(window).resize(function(){
  location.reload();
});
var items = $('.menu-item');
var nav = $('.navigation');
var btn = $('.btn-menubar');
var menu = $('.menu');
var lists = $('.menu-list');
var slogan = $('.slogan-heading');

if(viewport.matches){  
  items.addClass('icon-plus');
  items.attr('role', 'button');
  items.attr('aria-haspopup', 'true');
  items.attr('aria-pressed', 'false');
  items.attr('aria-expanded', 'false');
  slogan.addClass('a11y-hidden');
  
  btn.on('click', function(e){
    e.preventDefault();
    nav.toggleClass('is-act');
    if(nav.hasClass('is-act')){
      btn.attr('aria-label', '메인메뉴 닫기');
    }else{
      btn.attr('aria-label', '메인메뉴 열기');
    }
  });
  
  items.on('click', function(e){
    e.preventDefault();
    lists.removeClass('menu-act');
    $(this).parent().addClass('menu-act');
    items.removeClass('icon-minus').addClass('icon-plus');
    $(this).removeClass('icon-plus').addClass('icon-minus');
    if(lists.hasClass('menu-act')){
      $(this).attr('aria-pressed', 'true').attr('aria-expanded', 'true');
    }else{
      items.attr('aria-pressed', 'false').attr('aria-expanded', 'false');
    }
  });
  
  menu.on('focusin', function(){
    nav.addClass('is-act');
  });
  menu.on('focusout', function(){
    nav.removeClass('is-act');
  });
}else{
  items.attr('role', 'presentation');
  items.attr('tabindex', '-1');
  items.on('click', function(e){
    e.preventDefault();
  });
}


$(function() {
$('.slider--parmtop').slick({
    // slidesToShow: 3,
  slidesToScroll:1,
  // autoplay: true,
  autoplaySpeed: 3000,
  // variableWidth:true,
  dots:true,
  arrows:false,
});
});

$(function() {
  $('.slider--desktop').slick({
      // slidesToShow: 3,
    slidesToScroll:1,
    // autoplay: true,
    autoplaySpeed: 3000,
    // variableWidth:true,
    dots:true,
    arrows:false,
  });
  });


  //ウインドウ幅1024px以上でコンパクトメニューは強制終了
  var timer = false;
  $(window).resize(function(){
    if (timer !== false){
      clearTimeout(timer);
    }
    timer = setTimeout(function(){
    var windowWidth = window.innerWidth;
    if (windowWidth >= 1024){
      $('#header').removeClass('open');
    }
  },200);
});

$('.burgerBtnArea').on('click',function(){
  $('#header').toggleClass('open');
});

// $('.open .headerMenu__item').on('click',function(){
//   $('#header').toggleClass('open');
// });



$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    }
    return false;
    
  });
});
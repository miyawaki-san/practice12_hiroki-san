



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


$('.burgerBtnArea').on('click',function(){
  $('#header').toggleClass('open');
});

$('.headerMenu__item').on('click',function(){
  $('#header').toggleClass('open');
});

// $('.overlay').on('click', function() {
//   $('#header').toggleClass('open');
// });

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
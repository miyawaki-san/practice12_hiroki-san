



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

$('.overlay').on('click', function() {
  $('#header').toggleClass('open');
});


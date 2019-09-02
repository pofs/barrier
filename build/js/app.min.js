var $window = $(window);
var $document = $(document);

$window.on('load', function () {
});

$window.on('mousemove', function (e) {
});

$window.on('resize', function () {
});

$window.on('scroll', function () {
  // inWindow()
});
// $(document).on('click touchend', '.information__images', infoModal);

//
$(document).ready(function () {
  $('.about-slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    speed: 300,
    arrows: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

function inWindow() {
  var preview = $('.preview').height();
  var form = $('.form-work').height();
  var top_scroll = $(document).scrollTop();
  var docHeight = $(document).height();
  var winHeight = $(window).height();

  if ((top_scroll >= preview) && (top_scroll <= (docHeight - winHeight - form))) {
    $('.btn-fixed').addClass('btn-fixed--visible')
  } else {
    $('.btn-fixed').removeClass('btn-fixed--visible')
  }
}


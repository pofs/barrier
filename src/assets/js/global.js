var $window = $(window);
var $document = $(document);

$window.on('load', function () {
});

$window.on('mousemove', function (e) {
});

$window.on('resize', function () {
});

$window.on('scroll', function () {

});
// $(document).on('click touchend', '.information__images', infoModal);

//
$(document).ready(function () {
  var size_window = $(window).width();
  if (size_window > 767) {
    var rellax = new Rellax('.name-animate', {
      speed: -3,
      center: true,
      round: true,
      vertical: true,
      horizontal: false
    });
    var rellax2 = new Rellax('.clouds-animate', {
      speed: 7,
    });
    var rellax3 = new Rellax('.problem-animate', {
      speed: 1,
    });
  }


  $('.about-slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    speed: 300,
    arrows: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $('.additional-info__wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    speed: 300,
    arrows: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
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


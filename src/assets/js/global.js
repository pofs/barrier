var $window = $(window);
var $document = $(document);

$window.on('load', function () {
});

$window.on('mousemove', function (e) {
});

$window.on('resize', function () {
});

$window.on('scroll', function () {
  inWindow()
});
// $(document).on('click touchend', '.information__images', infoModal);

//
$(document).ready(function () {

  $('#formProfile').h5Validate({
    errorClass: 'error',
    validClass: 'success'
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

$('form').submit(function (e) {
  var data = $('form').serializeArray();
  $.ajax({
    url: "send.php",
    type: "POST",
    data: data
  }).done(function () {
    console.log('success');
    $('.sendForm-wrapp').addClass('btn-form--success')

  }).fail(function () {
    console.log('fail');
  });

  // e.preventDefault();
});

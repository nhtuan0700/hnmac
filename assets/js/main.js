$(function() {
  $('#carouselExampleFade').carousel({
    interval: 3000
  })

  $('#buttonSearch').click(function(e) {
    e.preventDefault();
    $('#contain-search').css({
      'display': 'flex'
    });
  })

  $('#buttonClose').click(function(e) {
    e.preventDefault();
    $('#contain-search').hide();
  })

  $('.carouselProduct').carousel({
    interval: 5000
  })

  $('#carouselNews').carousel({
    interval: 300000
  })
})
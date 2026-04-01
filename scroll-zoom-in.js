$(function() {
  $(window).on('scroll', function() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    $('.scroll-zoom-in').each(function() {
      var targetPos = $(this).offset().top;
      var scrollPos = scrollTop + windowHeight - targetPos;
      var multiplier = 1.2;
      var progress = (scrollPos / windowHeight) * multiplier;
      progress = Math.min(1, Math.max(0, progress));
      var scaleVal = 0.8 + (progress * 0.2);
      var opacityVal = progress;
      $(this).find('.zoom-target').css({
        'transform': 'scale(' + scaleVal + ')',
        'opacity': opacityVal
      });
    });
  });
});

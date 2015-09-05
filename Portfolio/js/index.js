$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

/*$(".thumbnail").hover(
    function() {
      $(this).find(".caption").slideDown(250);
    },
    function() {
      $(this).find(".caption").slideUp(250);
    }
);*/
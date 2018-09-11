(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
    
    $(document).ready(function() {
  var navOpen = false;
  $('.toggle-nav').click(function() {
    if (navOpen == false) {
      $('.wrapper').css("position", "absolute").animate({
        left: "30%"
      });
      $(this).animate({
        left: "30%"
      }).removeClass("entypo-menu").addClass("entypo-cancel");
      $('nav').animate({
        left: "0%"
      });
      navOpen = true;
    } else {
      $('.wrapper').animate({
        left: "0%"
      }, function() {
        $(this).css("position", "relative");
      });
      $(this).animate({
        left: "0%"
      }).removeClass("entypo-cancel").addClass("entypo-menu");
      $('nav').animate({
        left: "-30%"
      });
      navOpen = false;
    }
  });
  
  // Smooth Anchor Scrolling
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });
});

})(jQuery); // End of use strict

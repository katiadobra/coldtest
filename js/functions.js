$(document).ready(function(){

  // slow scrolling
    $('#slowscroll li a').click(function () { 
      elementClick = jQuery(this).attr("href");
      destination = jQuery(elementClick).offset().top - 120;
        if(jQuery.browser.chrome){
          jQuery('body').animate({
            scrollTop: destination }, 1100 );
        } else {
          jQuery('html').animate({
            scrollTop: destination }, 1100 );
        }
        return false;
    });

// Main slider
  $('.flexslider').flexslider({
    animation: "fade", 
    controlNav: true,
    directionNav: true
  });

// Bottles
  $(function() {
    $('.kwicks').kwicks({
        maxSize: '33%',
        behavior: 'menu'
        // spacing: ''
     });
  });

// Bottles mobile
  $('.hidden-slider').flexslider({
    animation: "slide", 
    controlNav: false,
    directionNav: false
  });

// Latest
  $('.jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 600) {
            width = width / 2;
        } else if (width > 400) {
            width = width / 1;
        }

        element.jcarousel('items').css('width', width + 'px');
    })
    .jcarousel({
        // Your configurations options
    });

  // Open Mobile Menu
    $(".hide-nav").click(function() {
      $(".show-hide").toggle('');
    });

  // Open Menu 2
    // $('.hide-nav').on("click",function(e){
    //   e.preventDefault();
    //   if(!$(this).hasClass('opened')){
    //     $(this).addClass('opened');
    //     $('.navbar').animate({bottom: 0}, 300);

    //   }else{
    //     $(this).removeClass('opened');
    //     $('.navbar').animate({bottom: -290}, 300);
    //   }
    // });

  // Open Cart
    $(".cart").click(function() {
      $(".counter").toggle('');
    });
});
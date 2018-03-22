$(document).ready( function() {

    //Carousel
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear'
    });

    //Services-carousel
    $('.services-carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
    });

    //Brands-carousel
    $('.brands-carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });


   //Progress bars
    $('.circle-area-wrapper').circleProgress({
        value: 0.67,
        size: 165,
        startAngle: 1.55,
        thickness: 4,
        emptyFill: 'transparent',
        fill: "#f4b60d",
    });
    $('.industry').circleProgress({
        fill: "#248cec",
    });

    //Accordion
    $('.accordion-toggles .text-accordion').hide();
    $('.accordion-toggles .title-accordion').click(function(){
        let $text = $(this).next('.text-accordion');
        let $span = $(this).children('span');

        if ( $text.is(':hidden') ) {

            $('.accordion-toggles .title-accordion').each(function(){
                $(this).children('span').removeClass('close');
                $(this).next('.text-accordion').slideUp();
                $(this).css('color',"");
            });

            $(this).css('color',"#8a8a8a");
            $text.slideDown();
            $span.addClass('close');

        } else {

            $(this).css('color',"");
            $text.slideUp();
            $span.removeClass('close');

        }
    });

    //Toggles
    $('.accordion-toggles .text-toggles').hide();
    $('.accordion-toggles .title-toggles').click(function(){
        let $text = $(this).next('.text-toggles');
        let $span = $(this).children('span');

        if ( $text.is(':hidden') ) {

            $(this).css('color',"#8a8a8a");
            $text.slideDown();
            $span.addClass('close');

        } else {

            $(this).css('color',"");
            $text.slideUp();
            $span.removeClass('close');

        }
    });

    // tabs
    $('.tab-list li').on('click', function (e) {
      e.preventDefault();

      let $target = $(this).children('a').attr('data-target');
      let $targetElement = $( $target );

      //Delete all class active
      $('.tab-list li').removeClass('active');
      $('.tab-item').removeClass('active');

      //Add class active to this object
      $targetElement.addClass('active');
      $(this).addClass('active');

    });


});

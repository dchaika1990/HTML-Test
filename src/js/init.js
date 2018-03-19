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
    $( ".accordion-section-text" ).accordion({
        heightStyle: "content"
    });

    //Toggles
    $('.toggle-text').hide();
    $('.toggles-section-wrapper .faq h3').click(function () {
        let toggle_text = $(this).next('.toggle-text');
        let bg = $(this).children('.bg');

        if ( toggle_text.is(':hidden') ) {
            $(this).css('margin-bottom', '0');
            bg.css({
                background: 'url("./img/substract.png")',
                'background-position': '',
                'background-repeat': '',
                'background-color': '#f4b60d'
            });
            toggle_text.fadeIn().addClass('close');
        } else {
            $(this).css('margin-bottom', '4px');
            bg.css({
                background: 'url("./img/add.png")',
                'background-position': '',
                'background-repeat': '',
                'background-color': '#fff'
            });
            toggle_text.slideUp().removeClass('close');
        }
    });

});

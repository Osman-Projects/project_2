$(function () {

    $(window).load(function () {

        $('.preloader').delay(1000).fadeOut(1000);

    });


    var menuTop = $('nav').offset().top;

    //alert(menuTop);

    $(window).scroll(function () {

        var scrol_top = $(window).scrollTop();

        //alert(scrol_top);

        if (scrol_top > menuTop) {

            $('#nav').addClass('menu_fix')

        } else {

            $('#nav').removeClass('menu_fix')

        }

        //backtop button

        if (scrol_top > 200) {

            $('.backtop').slideDown(1000);

        } else {

            $('.backtop').slideUp(1000);

        }

    });



    $('#banner_slider').slick({

        autoplay: true,
        speed: 1000,
        arrows: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-left arrow_left"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right arrow_right"></i>',
        dots: true,
        dotsClass: 'slick_dots',

    });

    $('.about_slider').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots',
        prevArrow: '<i class="fas fa-long-arrow-alt-left arrow_left"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right arrow_right"></i>'

    });



    $('.venobox_custom').venobox({
        spinner: 'cube-grid',
        closeColor: 'yellow',
        arrowsColor: 'red',
        framewidth: '400px', // default: ''
        frameheight: '300px', // default: ''
        border: '10px', // default: '0'
        bgcolor: '#5dff5e', // default: '#fff'
        titleattr: 'data-title', // default: 'title'
        numeratio: true, // default: false
        infinigall: true, // default: false
        share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download']
    });

    $('.venobox').venobox({
        closeColor: 'yellow',
        spinner: 'cube-grid',
        arrowsColor: 'red',
        share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download']
    });

    $('.filter-container').filterizr();

    $('.filter_menu ul li').click(function () {

        $('.filter_menu ul li').removeClass('filter_menu_active');
        $(this).addClass('filter_menu_active');

    });

    $('.backtop').click(function () {

        $('html,body').animate({

            scrollTop: 0,

        }, 500);

    });



});

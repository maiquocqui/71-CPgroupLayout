'use strict';

$(document).ready(function () {
    new WOW().init();
    // $('header').scrollToFixed({
    //     zIndex: 100,
    // });
    if ($(window).width() > 1199) {
        $('.top-nav').scrollToFixed({
            zIndex: 40,
            marginTop: 90,
            limit: function limit() {
                var limit = $('.top-nav2').offset().top - $('.top-nav').outerHeight(true);
                return limit;
            }
        });
        $('.top-nav2').scrollToFixed({
            zIndex: 50,
            marginTop: 90
        });
        $('.top-nav3').scrollToFixed({
            zIndex: 50,
            marginTop: 90
        });
    } else {
        $('.top-nav').scrollToFixed({
            zIndex: 40,
            marginTop: 60,
            limit: function limit() {
                var limit = $('.top-nav2').offset().top - $('.top-nav').outerHeight(true);
                return limit;
            }
        });
        $('.top-nav2').scrollToFixed({
            zIndex: 50,
            marginTop: 60
        });
        $('.top-nav3').scrollToFixed({
            zIndex: 50,
            marginTop: 60
        });
    }
    $('[data-toggle="tooltip"]').tooltip();
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 120) {
            $('header').addClass('hide');
        } else {
            $('header').removeClass('hide');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $('.up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $(".counter").countimator({
        duration: 1000
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());
    $('.searchtoggle').click(function () {
        $('.searchwrap').fadeToggle(300);
    });

    $('.faqtitle').click(function () {
        $(this).siblings('.faqcontent').slideToggle(300);
    });
    // $('.btn-closesearch').click(function() {
    //     $('.search').slideToggle(300);
    // });

    // MENU
    // if ($(window).width() < 1200) {
    //     $('.menu').insertBefore('.fullpage');
    // }
    $('.btn-showmenu').click(function () {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
    });
    $('.btn-closemenu').click(function () {
        $('.menu').removeClass('open');
        $('.overlay').fadeOut(500);
    });
    $('.overlay').click(function () {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
    });
    $('.btn-showsub').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(300);
    });
    if ($(window).width() < 768) {
        $('.toptool .sitelink').insertAfter('.menulogo');
    }

    // END-MENU

    $('.btn-apply').click(function () {
        $('.apply-form').slideToggle(300);
    });

    // RESPONSIVE TABS
    $('#responsiveTabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    // PRODUCT CATEGORY
    // $('.product-category .btn-showsub').click(function() {
    //     $(this).siblings('.sub').slideToggle(500);
    // });

    // SLIDE 
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true
    });
    $('.brand-slide').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 7
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    $('.partner-slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: false
    });

    $('.improve-img-slide, .img-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $('.album-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.album-nav'
    });
    $('.album-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.album-slide',
        dots: false,
        arrows: false
    });

    $('.cert-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.message-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: true
    });

    // HISTORY SCRIPT
    // $('.history-event').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     fade: false,
    //     speed: 1000,
    //     adaptiveHeight: true,
    //     asNavFor: '.history-year'
    // });
    // $('.history-year').slick({
    //     slidesToShow: 7,
    //     slidesToScroll: 1,
    //     asNavFor: '.history-event',
    //     dots: false,
    //     arrows: false,
    //     speed: 1000,
    //     infinite: false,
    //     focusOnSelect: true,
    //     responsive: [{
    //             breakpoint: 1199,
    //             settings: {
    //                 slidesToShow: 6,
    //             }
    //         }, {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 5,
    //             }
    //         }, {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 543,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         }
    //     ]
    // });
});

// PAGE SCROLL TO ID

$(window).on("load", function () {
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 140,
        forceSingleHighlight: true
    });
});

// REVOLUTION SLIDER
var tpj = jQuery;

var banner001;
tpj(document).ready(function () {
    if (tpj("#banner001").revolution == undefined) {
        revslider_showDoubleJqueryError("#banner001");
    } else {
        banner001 = tpj("#banner001").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'uranus',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 300,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    style: 'hermes',
                    tmp: '',
                    direction: 'horizontal',
                    rtl: false,

                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 20,
                    space: 8,

                    hide_onleave: false,
                    hide_onmobile: false,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200

                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1920, 1920, 1920, 1920],
            gridheight: [960, 960, 960, 960],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 300,
                levels: [5000]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
});
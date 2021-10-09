(function ($) {
    "use strict";

    /*--
        Commons Variables
    -----------------------------------*/
    var $window = $(window),
        $body = $('body');

    /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
    $('[data-bg-image]').each(function () {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });
    $('[data-bg-color]').each(function () {
        var $this = $(this),
            $color = $this.data('bg-color');
        $this.css('background-color', $color);
    });

    /*------------------------------
        Parallax Motion Animation 
    -------------------------------*/
    $('.scene').each(function () {
        new Parallax($(this)[0]);
    });

    /*--
        Header Sticky
    -----------------------------------*/
    $window.on('scroll', function () {
        if ($window.scrollTop() > 350) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    });

    /*--
        Off Canvas Function
    -----------------------------------*/
    $('.header-mobile-menu-toggle, .mobile-menu-close').on('click', '.toggle', function () {
        $body.toggleClass('mobile-menu-open');
    });
    $('.site-mobile-menu').on('click', '.menu-toggle', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.siblings('.sub-menu:visible, .mega-menu:visible').length) {
            $this.siblings('.sub-menu, .mega-menu').slideUp().parent().removeClass('open').find('.sub-menu, .mega-menu').slideUp().parent().removeClass('open');
        } else {
            $this.siblings('.sub-menu, .mega-menu').slideDown().parent().addClass('open').siblings().find('.sub-menu, .mega-menu').slideUp().parent().removeClass('open');
        }
    });


    $('.header-search-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.header-search-form, .header-search-form-2').slideToggle().parent().toggleClass('open');
    });

    $('.header-fs-search-toggle').on('click', function () {
        $('#fullscreen-search').addClass('open');
    });
    $('.fullscreen-search-close').on('click', '.toggle', function () {
        $('#fullscreen-search').removeClass('open');
    });

    $body.on('click', function (e) {
        if (!$(e.target).closest('.header-search').length && $window.width() < 768) {
            $('.header-search-form, .header-search-form-2').slideUp().parent().removeClass('open');
        }
        if (!$(e.target).closest('.site-main-mobile-menu-inner').length && !$(e.target).closest('.header-mobile-menu-toggle').length) {
            $body.removeClass('mobile-menu-open');
        }
    });


    $('.max-popup-close').on('click', function () {
        var $this = $(this),
            $popup = $this.closest('#max-popup'),
            $dialog = $this.parent('.max-popup-dialog');
        $popup.addClass('close');
        $dialog.removeClass('fadeInUp').addClass('fadeOutUp');
    });


    /* -----------------------------------
        Selectric Fake Select Plugin 
    -------------------------------------*/
    $('.selectric').selectric({
        arrowButtonMarkup: '<span class="arrow"><i class="far fa-angle-down"></i></span>',
        disableOnMobile: false,
    });
    $('.sort-by').selectric({
        arrowButtonMarkup: '<span class="arrow"><i class="far fa-angle-down"></i></span>',
        labelBuilder: '<i class="far fa-align-left"></i> Sort By: <span>{text}</span>',
        disableOnMobile: false,
    });

    /* ----------------------------
        AOS Scroll Animation 
    -------------------------------*/
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });


    /*----------------------------------------
         SVG Inject With Vivus(After Inject) 
    ------------------------------------------*/
    SVGInject(document.querySelectorAll("img.svgInject"), {
        makeIdsUnique: true,
        afterInject: function (img, svg) {
            new Vivus(svg, {
                duration: 80
            });
        }
    });
    /* Vivus On Hover */
    $('[data-vivus-hover]').hover(function () {
        var svg = $(this).find('svg')[0];
        new Vivus(svg, {
            duration: 50
        });
    })

    /*----------------------------
        Justified Gallery 
    ------------------------------*/
    var $justifiedGallery = $('.justified-gallery');

    $justifiedGallery.imagesLoaded(function () {
        $justifiedGallery.justifiedGallery({
            rowHeight: 440,
            maxRowHeight: null,
            margins: 10,
            border: 0,
            lastRow: 'nojustify'
        });
        
    });

    /*-----------------------
        CounterUp JS 
    -------------------------*/
    $('.counter').counterUp({
        time: 2000
    });

    /*--------------------------------
        Swiper Slider Activation JS 
    ----------------------------------*/
     // Home 7 Slider
     var intro7Slider = new Swiper('.intro7-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.home7-slider-pagination',
            clickable: true,
        }
        //autoplay: {},
    });

    // Home 8 Slider
    var intro8Slider = new Swiper('.intro8-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.home8-slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.home8-slider-next',
            prevEl: '.home8-slider-prev',
        },
        //autoplay: {},
    });

    // Home 11 Slider
    var intro11Slider = new Swiper('.intro11-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        effect: 'fade',
        navigation: {
            nextEl: '.home11-slider-next',
            prevEl: '.home11-slider-prev',
        },
        //autoplay: {},
    });

    // Banner Slider
    var bannerSlider = new Swiper('.banner-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        effect: 'fade',
        navigation: {
            nextEl: '.banner-slider-next',
            prevEl: '.banner-slider-prev',
        },
        //autoplay: {},
    });

    // Health Testimonial Slider
    var testimonialSlider = new Swiper('.health-testimonial-slider', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
        //autoplay: {},
    });

    // Testimonial Slider
    var testimonialSlider = new Swiper('.testimonial-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 50,
        slidesPerView: 2,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            }
        }
    })

    // Testimonial Slider Two
    var testimonialSlider = new Swiper('.testimonial-slider-two', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween : 50,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 3
            },

            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

    // Testimonial Slider Three
    var testimonialSlider = new Swiper('.testimonial-slider-three', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        autoHeight: true,
        spaceBetween : 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-t0',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1499:{
                slidesPerView : 1
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

    // Testimonial Slider Vertical
    var testimonialSlider = new Swiper('.testimonial-slider-vertical', {
        slidesPerView : 1,
        slidesPerGroup: 1,
        effect: 'coverflow',
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            1499:{
                slidesPerView : 1
            },

            991:{
                slidesPerView : 1
            },

            767:{
                slidesPerView : 1

            },

            575:{
                slidesPerView : 1
            }
        }
    });

    // Home 5 Testimonial Slider
    var testimonialSlider = new Swiper('.h5-testimonial-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })


    // Home 8 Testimonial Slider
    var testimonialSlider = new Swiper('.testimonial-slider-8', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
    })

    // Testimonial Slider Three Item
    var testimonialSlider = new Swiper('.testimonial-slider-three-item', {
        watchSlidesVisibility: true,
        loop: true,
        autoHeight: true,
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
            nextEl: '.circle-slider-next',
            prevEl: '.circle-slider-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Motivation Testimonial Slider
    var testimonialSlider = new Swiper('.motivation-testimonial-slider', {
        watchSlidesVisibility: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // Brand Carousel Slider
    var brandSlider = new Swiper('.brand-carousel', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 6,
        breakpoints: {
            1200: {
                slidesPerView: 6
            },
            992: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 5
            },
            576: {
                slidesPerView: 4
            },
            320: {
                slidesPerView: 2
            }
        }
    })

    // Courses Slider
    var courseSlider = new Swiper('.courses-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Speaker Slider
    var speakerSlider = new Swiper('.speaker-slider', {
        watchSlidesVisibility: true,
        loop: false,
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            1200: {
                slidesPerView: 5
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Event Slider
    var eventSlider = new Swiper('.event-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Event Slider Four Item
    var eventSlider = new Swiper('.event-slider-four-item', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 1,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    })

    // Service Slider
    var serviceSlider = new Swiper('.service-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    })

    // Cooking About Slider
    var cookingSlider = new Swiper('.cooking-about-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
    })

    /*--
        Isotpe
    -----------------------------------*/
    var $isotopeGrid = $('.isotope-grid');
    var $isotopeFilter = $('.isotope-filter');
    $isotopeGrid.imagesLoaded(function () {
        $isotopeGrid.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        AOS.refresh();
    });
    $isotopeFilter.on('click', 'button', function () {
        var $this = $(this),
            $filterValue = $this.attr('data-filter'),
            $targetIsotop = $this.parent().data('target');
        $this.addClass('active').siblings().removeClass('active');
        $($targetIsotop).isotope({
            filter: $filterValue
        });
    });

    /*--
        ion Range Slider
    -----------------------------------*/
    $(".price-range").ionRangeSlider({
        skin: "maxCoach",
        hide_min_max: true,
        type: 'double',
        prefix: "$",
    });


    /*--
        Jarallax Active
    -----------------------------------*/
    $('.jarallax').jarallax({
        speed: 0.2
    });

    /*--
        Rellax Active
    -----------------------------------*/
    var rellax = new Rellax('.rellax');

    /*------------------------
        Sticky Sidebar Active
    -------------------------*/
    $('#sticky-sidebar').theiaStickySidebar({
        // Settings
        additionalMarginTop: 120
    });


    /*----------------------------------- 
        Count Down Active 
    ----------------------------------*/  
    $('[data-countdown]:not(.pro-countdown-1,.pro-countdown-2)').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="single-countdown-box"><span>%D</span>Day</div><div class="single-countdown-box"><span>%H</span>Hours</div><div class="single-countdown-box"><span>%M</span>Mins</div><div class="single-countdown-box"><span>%S</span>Secs</div>'));
        });
    });
    $('[data-countdown].pro-countdown-1').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="single-countdown-box-1"><span>%D</span>Day</div><div class="single-countdown-box-1"><span>%H</span>Hours</div><div class="single-countdown-box-1"><span>%M</span>Mins</div><div class="single-countdown-box-1"><span>%S</span>Secs</div>'));
        });
    });
    $('[data-countdown].pro-countdown-2').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="countdown-item before-none"><span>%D</span></div><div class="countdown-item"><span>%H</span></div><div class="countdown-item"><span>%M</span></div><div class="countdown-item"><span>%S</span></div>'));
        });
    });
    
    /*----- 
        Quantity
    --------------------------------*/
    $('.pro-qty').prepend('<button class="dec qtybtn">-</button>');
    $('.pro-qty').append('<button class="inc qtybtn">+</button>');
    $('.qtybtn').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
        } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
        }
        }
        $button.parent().find('input').val(newVal);
    });

    /*----- 
	Shipping Form Toggle
    --------------------------------*/ 
    $('[data-shipping]').on('click', function(){
        if( $('[data-shipping]:checked').length > 0 ) {
            $('#shipping-form').slideDown();
        } else {
            $('#shipping-form').slideUp();
        }
    })
        
    /*----- 
        Payment Method Select
    --------------------------------*/
    $('[name="payment-method"]').on('click', function(){
        
        var $value = $(this).attr('value');

        $('.single-method p').slideUp();
        $('[data-method="'+$value+'"]').slideDown();
        
    })

    /*----- 
        Animate Headline Active
    --------------------------------*/
    $('.headline-active').animatedHeadline({
        animationType: 'rotate-2'
    });

    /*--
        Magnific Popup
    -----------------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*--
        Scroll Up
    -----------------------------------*/
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();


    /*-------------------------
        Ajax Contact Form 
    ---------------------------*/
    $(function() {

        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('.form-messege');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });

    });

    /*--
        On Load Function
    -----------------------------------*/
    $window.on('load', function () {});

    /*--
        Resize Function
    -----------------------------------*/
    $window.resize(function () {});

})(jQuery);
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
        },1000);
    }
  }
  var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cH;
var cW;
var bgColor = "#FF6138";
var animations = [];
var circles = [];

var colorPicker = (function() {
  var colors = ["#FF6138", "#FFBE53", "#2980B9", "#282741"];
  var index = 0;
  function next() {
    index = index++ < colors.length-1 ? index : 0;
    return colors[index];
  }
  function current() {
    return colors[index]
  }
  return {
    next: next,
    current: current
  }
})();

function removeAnimation(animation) {
  var index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
  var l = Math.max(x - 0, cW - x);
  var h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

function addClickListeners() {
  document.addEventListener("touchstart", handleEvent);
  document.addEventListener("mousedown", handleEvent);
};

function handleEvent(e) {
    if (e.touches) { 
      e.preventDefault();
      e = e.touches[0];
    }
    var currentColor = colorPicker.current();
    var nextColor = colorPicker.next();
    var targetR = calcPageFillRadius(e.pageX, e.pageY);
    var rippleSize = Math.min(200, (cW * .4));
    var minCoverDuration = 750;
    
    var pageFill = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: nextColor
    });
    var fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration:  Math.max(targetR / 2 , minCoverDuration ),
      easing: "easeOutQuart",
      complete: function(){
        bgColor = pageFill.fill;
        removeAnimation(fillAnimation);
      }
    });
    
    var ripple = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: currentColor,
      stroke: {
        width: 3,
        color: currentColor
      },
      opacity: 1
    });
    var rippleAnimation = anime({
      targets: ripple,
      r: rippleSize,
      opacity: 0,
      easing: "easeOutExpo",
      duration: 900,
      complete: removeAnimation
    });
    
    var particles = [];
    for (var i=0; i<32; i++) {
      var particle = new Circle({
        x: e.pageX,
        y: e.pageY,
        fill: currentColor,
        r: anime.random(24, 48)
      })
      particles.push(particle);
    }
    var particlesAnimation = anime({
      targets: particles,
      x: function(particle){
        return particle.x + anime.random(rippleSize, -rippleSize);
      },
      y: function(particle){
        return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
      },
      r: 0,
      easing: "easeOutExpo",
      duration: anime.random(1000,1300),
      complete: removeAnimation
    });
    animations.push(fillAnimation, rippleAnimation, particlesAnimation);
}

function extend(a, b){
  for(var key in b) {
    if(b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

var Circle = function(opts) {
  extend(this, opts);
}

Circle.prototype.draw = function() {
  ctx.globalAlpha = this.opacity || 1;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  if (this.stroke) {
    ctx.strokeStyle = this.stroke.color;
    ctx.lineWidth = this.stroke.width;
    ctx.stroke();
  }
  if (this.fill) {
    ctx.fillStyle = this.fill;
    ctx.fill();
  }
  ctx.closePath();
  ctx.globalAlpha = 1;
}

var animate = anime({
  duration: Infinity,
  update: function() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, cW, cH);
    animations.forEach(function(anim) {
      anim.animatables.forEach(function(animatable) {
        animatable.target.draw();
      });
    });
  }
});

var resizeCanvas = function() {
  cW = window.innerWidth;
  cH = window.innerHeight;
  c.width = cW * devicePixelRatio;
  c.height = cH * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
};

(function init() {
  resizeCanvas();
  if (window.CP) {
    // CodePen's loop detection was causin' problems
    // and I have no idea why, so...
    window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000; 
  }
  window.addEventListener("resize", resizeCanvas);
  addClickListeners();
  if (!!window.location.pathname.match(/fullcpgrid/)) {
    startFauxClicking();
  }
  handleInactiveUser();
})();

function handleInactiveUser() {
  var inactive = setTimeout(function(){
    fauxClick(cW/2, cH/2);
  }, 2000);
  
  function clearInactiveTimeout() {
    clearTimeout(inactive);
    document.removeEventListener("mousedown", clearInactiveTimeout);
    document.removeEventListener("touchstart", clearInactiveTimeout);
  }
  
  document.addEventListener("mousedown", clearInactiveTimeout);
  document.addEventListener("touchstart", clearInactiveTimeout);
}

function startFauxClicking() {
  setTimeout(function(){
    fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
    startFauxClicking();
  }, anime.random(200, 900));
}

function fauxClick(x, y) {
  var fauxClick = new Event("mousedown");
  fauxClick.pageX = x;
  fauxClick.pageY = y;
  document.dispatchEvent(fauxClick);
}
// Open close dropdown on click
$("li.dropdown").click(function(){
    if($(this).hasClass("open")) {
      $(this).find(".dropdown-menu").slideUp("fast");
      $(this).removeClass("open");
    }
    else { 
      $(this).find(".dropdown-menu").slideDown("fast");
      $(this).toggleClass("open");
    }
  });
  
  // Close dropdown on mouseleave
  $("li.dropdown").mouseleave(function(){
    $(this).find(".dropdown-menu").slideUp("fast");
    $(this).removeClass("open");
  });
  
  // Navbar toggle
  $(".navbar-toggle").click(function(){
    $(".navbar-collapse").toggleClass("collapse").slideToggle("fast");
  });
  
  // Navbar colors
  $("#nav-colors > .btn").click(function(){
    if($(this).is("#pink")) {
      $(".navbar").css("background","linear-gradient(to right, #ff5858, #f857a6)");
      $(".dropdown-menu").css("background","#ff5858");
    }
    else if($(this).is("#red")) {
      $(".navbar").css("background","linear-gradient(to right, #d31027, #ea384d)");
      $(".dropdown-menu").css("background","#d31027");
    }
    else if($(this).is("#purple")) {
      $(".navbar").css("background","linear-gradient(to right, #41295a, #2f0743)");
      $(".dropdown-menu").css("background","#41295a");
    }
    else if($(this).is("#blue")) {
      $(".navbar").css("background","linear-gradient(to right, #396afc, #2948ff)");
      $(".dropdown-menu").css("background","#396afc");
    }
    else if($(this).is("#green")) {
      $(".navbar").css("background","linear-gradient(to right, #add100, #7b920a)");
      $(".dropdown-menu").css("background","#add100");
    }
    else if($(this).is("#yellow")) {
      $(".navbar").css("background","linear-gradient(to right, #f7971e, #ffd200)");
      $(".dropdown-menu").css("background","#f7971e");
    }
    else if($(this).is("#orange")) {
      $(".navbar").css("background","linear-gradient(to right, #e43a15, #e65245)");
      $(".dropdown-menu").css("background","#e43a15");
    }
  })
  
  // Font colors
  $("#font-colors > .btn").click(function(){
    if($(this).is("#white")) {
      $(".navbar .fa, .link, a").css("color","white");
      $(".icon-bar").css("background","white");
    }
    else if($(this).is("#black")) {
      $(".navbar .fa, .link, a").css("color","black");
      $(".icon-bar").css("background","black");
    }
  })
  
  // edges
  $("#edges > .btn").click(function(){
    if($(this).is("#rounded")) {
      $(".navbar, .form-control").css("border-radius","8px");
      if($(window).width() > 768) {
        $(".dropdown-menu").css({
          "border-bottom-right-radius":"8px",
          "border-bottom-left-radius":"8px"
        });
      }
    }
    else if($(this).is("#square")) {
      $(".navbar, .form-control").css("border-radius","0");
      $(".dropdown-menu").css({
        "border-bottom-right-radius":"0",
        "border-bottom-left-radius":"0"
      });
    }
  })
  
  
function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
  }
  
  function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+ sliceID + "'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
  
    $(id + " ." + sliceID).css({
      "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
    });
  
    $(id + " ." + sliceID + " span").css({
      "transform"       : "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
      "background-color": color
    });
  }
  
  function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var
      maxSize = 179,
      sliceID = "s" + dataCount + "-" + sliceCount;
  
    if( sliceSize <= maxSize ) {
      addSlice(id, sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(id, maxSize, pieElement, offset, sliceID, color);
      iterateSlices(id, sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
  }
  
  function createPie(id) {
    var
      listData      = [],
      listTotal     = 0,
      offset        = 0,
      i             = 0,
      pieElement    = id + " .pie-chart__pie"
      dataElement   = id + " .pie-chart__legend"
  
      color         = [
        "cornflowerblue",
        "olivedrab",
        "orange",
        "tomato",
        "crimson",
        "purple",
        "turquoise",
        "forestgreen",
        "navy"
      ];
  
    color = shuffle( color );
  
    $(dataElement+" span").each(function() {
      listData.push(Number($(this).html()));
    });
  
    for(i = 0; i < listData.length; i++) {
      listTotal += listData[i];
    }
  
    for(i=0; i < listData.length; i++) {
      var size = sliceSize(listData[i], listTotal);
      iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
      $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
      offset += size;
    }
  }
  
  function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = a[i - 1];
          a[i - 1] = a[j];
          a[j] = x;
      }
  
      return a;
  }
  
  function createPieCharts() {
    createPie('.pieID--micro-skills' );
    createPie('.pieID--categories' );
    createPie('.pieID--operations' );
  }
  
  createPieCharts();


    window.__be = window.__be || {};
    window.__be.id = "60dc97109f6f390007269482";
    (function() {
        var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
        be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
    })();

$('.parallax-banner').parallax({ imageSrc: './img/Jo-Ann-1920px-2-compressed.jpg' });

(function($) {

    $WIN = $(window);
    $('.smoothscroll').on('click', function(e) {
        var target = this.hash,
            $target = $(target);

        e.preventDefault();
        e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': target ? $target.offset().top : 0
        }, 800, 'swing').promise().done(function() {

            // check if menu is open
            if ($('body').hasClass('menu-is-open')) {
                $('.header-menu-toggle').trigger('click');
            }

            window.location.hash = target;
        });
    });


    var menuTrigger = $('.header-menu-toggle');

    $WIN.on('scroll', function() {

        if ($WIN.scrollTop() > 1000) {
            menuTrigger.addClass('opaque');
        } else {
            menuTrigger.removeClass('opaque');
        }

    });


    var menuTrigger = $('.header-menu-toggle'),
        nav = $('.header-nav'),
        closeButton = nav.find('.header-nav__close'),
        siteBody = $('body'),
        mainContents = $('section, footer');

    // open-close menu by clicking on the menu icon
    menuTrigger.on('click', function(e) {
        e.preventDefault();
        // menuTrigger.toggleClass('is-clicked');
        siteBody.toggleClass('menu-is-open');
    });

    // close menu by clicking the close button
    closeButton.on('click', function(e) {
        e.preventDefault();
        menuTrigger.trigger('click');
    });

    // close menu clicking outside the menu itself
    siteBody.on('click', function(e) {
        if (!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span')) {
            // menuTrigger.removeClass('is-clicked');
            siteBody.removeClass('menu-is-open');
        }
    });


    var pxShow = 500, // height on which the button will show
        fadeInTime = 400, // how slow/fast you want the button to show
        fadeOutTime = 400, // how slow/fast you want the button to hide
        scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
        goTopButton = $(".go-top")

    // Show or hide the sticky footer button
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= pxShow) {
            goTopButton.fadeIn(fadeInTime);
        } else {
            goTopButton.fadeOut(fadeOutTime);
        }
    });

})(jQuery);
$(document).ready(function() {

    var navbarCollapseWidth = 992;
    
    // set the navbar filler's height to fit underneath the navbar
    $('.navbar-filler').height($('.navbar').outerHeight(true));

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#home']").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight(true)
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    function setNavbarHeight(height) {
        $('.navbar-nav > li > a, .navbar-brand').css('height', height)
        $('.navbar-nav > li > a, .navbar-brand').css('line-height', height)
        $('.navbar-contact-icon').css('line-height', height)
    }

    function navbarOnScroll() {
        var winWidth = $(window).width()

        // only if the navbar isn't collapsed
        if (winWidth >= navbarCollapseWidth) {

            var scrollPos = $(document).scrollTop();

            // top of the window
            if (scrollPos == 0) {
                $('#imgNavbarLogo').attr('src', 'img/Black background white letters.png');
                setNavbarHeight('100px');
            } else {
                $('#imgNavbarLogo').attr('src', 'img/logoIconOnly.png');
                setNavbarHeight('60px');
            }
        }
    }

    function navbarOnResize() {
        var winWidth = $(window).width()

        if (winWidth < navbarCollapseWidth) {
            $('#imgNavbarLogo').attr('src', 'img/Black background white letters.png');
            setNavbarHeight('100px');
        } else {
            navbarOnScroll()
        }
    }

    $(window).scroll(navbarOnScroll);
    $(window).resize(navbarOnResize);

})


$(function() {
    $('.nav a').on('click', function() {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });
});

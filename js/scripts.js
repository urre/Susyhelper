/*
*************************************************

Huskvarna
JavaScript Functions
Requires jQuery

Created by @urre
http://urre.me

*************************************************
*/

(function($) {

    "use strict";

    var Huskvarna = {

        elements: {
            viewport      : $('html, body'),
            mobilenav     : $("#mobilenav"),
            hamburger     : $(".menu-link"),
            hamburger_icon: $(".menu-link i"),
            push_container: $(".cc"),
            searchicon    : $('.search-trigger'),
            searchform    : $('#searchform'),
            searchinput   : $('#s'),
            close         : $('#close'),
            cancel        : $('.icon-cancel'),

        },

        settings: {
            phone: 480,
            tablet: 768,
            desktop: 1200,
            wide: 1500,
            sliderheight: 400,
        },

        init: function() {

            // Misc
            this.misc();

            // Mobile nav
            this.mobilenav();

            // Search
            this.dosearch();


        },

        dosearch: function(){

            // Open search bar and focus input field
            Huskvarna.elements.searchicon.click(function(event){
                   Huskvarna.elements.searchform.toggleClass('active');
                   Huskvarna.elements.searchinput.focus();
                   event.preventDefault();
            });

            // Close search bar
            Huskvarna.elements.close.click(function(event){
                Huskvarna.elements.searchform.removeClass('active');
                vent.preventDefault();
            });

        },

        mobilenav: function(){

            // Open mobile menu
            Huskvarna.elements.hamburger.click(function(event){
                event.preventDefault();
                Huskvarna.elements.mobilenav.toggleClass("active");
                Huskvarna.elements.push_container.toggleClass("active");
            });

            // Close mobile menu
            Huskvarna.elements.cancel.click(function(event){
                event.preventDefault();
                Huskvarna.elements.mobilenav.removeClass("active");
                Huskvarna.elements.push_container.removeClass("active");
            });

            /**
             * Hide nav when resize window, debounced
             * @return {[type]} [description]
             */
            var hidenav = Huskvarna.debounce(function() {
                if($(window).width() > 500) {
                    Huskvarna.elements.mobilenav.removeClass("active");
                    Huskvarna.elements.push_container.removeClass("active");
                    Huskvarna.elements.hamburger_icon.attr('class', 'icon-cancel');
                    Huskvarna.elements.searchform.removeClass('active');
                }
            }, 50);

            window.addEventListener('resize', hidenav);

        },

        initSlider: function(){

            if($(window).width() < Huskvarna.settings.desktop {
                Huskvarna.settings.sliderheight = '360';
            } else {
                Huskvarna.settings.sliderheight = '580';
            }

        	setTimeout(function() {
        		$('.fotorama').fotorama();
        		$('.main-slider-item-caption').addClass('loaded');
        		$('.main-slider button').remove();
        	}, 200);

        },


        misc: function(){

            /**
             * Mixitup2, https://mixitup.kunkalabs.com
             */
            $('#rum-mix').mixItUp({
                animation: {
                        duration: 200,
                        effects: 'translateZ(-360px) fade rotateY(20deg)',
                        easing: 'ease'
                    }
            });

	         // http://stackoverflow.com/questions/8858994/let-user-scrolling-stop-jquery-animation-of-scrolltop
	         Huskvarna.elements.viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
	             if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
	                 Huskvarna.elements.viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
	             }
	         });
        },

        debounce: function(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}},

	}

    $(function() {

        Huskvarna.init();

    });

    $(window).scroll(function() {

    });

    $(window).resize(function() {

    });


    $(window).load(function(){

		Huskvarna.initSlider();

    });


}(jQuery));
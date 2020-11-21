(function ($) {
	'use strict';
	$(function (e) {

		/*------------------------------------------------------------------
			Navigation
			-------------------------------------------------------------------*/

		/*------------------------------------------------------------------
			Testimonial Slider
			-------------------------------------------------------------------*/

		var owl1 = $("#testimonial-slider");
		owl1.owlCarousel({
			itemsCustom: [
				[0, 1],
				[450, 1],
				[550, 1],
				[767, 1],
				[991, 2],
			],
			loop: true,
			nav: true,
			navigation: false,
			autoPlay: 3000
		});

		/*------------------------------------------------------------------
			Popular Brands
			-------------------------------------------------------------------*/
		var owl2 = $("#popular_brands");
		owl2.owlCarousel({
			itemsCustom: [
				[0, 2],
				[450, 3],
				[550, 4],
				[700, 5],
				[1024, 6],
				[1200, 7],
			],
			loop: true,
			nav: true,
			navigation: false,
			autoPlay: 3000
		});

		/*------------------------------------------------------------------
			Price-Range
			-------------------------------------------------------------------*/
		$(function (e) {
			$("#price_range").slider({});
		});

		$(function (e) {
			$("#price_range1").slider({});
		});
 
		/*------------------------------------------------------------------
			Other-info
			-------------------------------------------------------------------*/
		$('#other_info').on('click', function (e) {
			$("#info_toggle").slideToggle();
		});


		/*------------------------------------------------------------------
			back to top
			-------------------------------------------------------------------*/
		var top = $('#back-top');
		top.hide();

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				top.fadeIn();
			} else {
				top.fadeOut();
			}
		});
		$('#back-top a').on('click', function (e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});




	});


})(jQuery);
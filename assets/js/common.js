(function($) {
	'use strict';

	var body = $('html, body');

	/**
	 * Animate the body's background color
	 */
	var change = function(color) {
		body.animate({
			backgroundColor: color
		}, 500);
	}

	var even = $('.connections li:nth-child(2n) a');
	var odd = $('.connections li:nth-child(2n + 1) a');

	/**
	 * Change background of background when a
	 * media icon is hovered
	 */
	even.hover(function(e) {
		change('rgba(240, 61, 104, 1)');
	});
	odd.hover(function(e) {
		change('rgb(49, 159, 221)');
	});

})(window.jQuery);
(function($) {
	
	$.fn.log = function (message, options) {
		
		var default_options = {
			"color": "red",
			"background-color": "yellow",
			"font-size": "8.5pt",
			"font-family": "Tahoma",
			"font-weight": "Bold"
		};
		
		var final_options = $.extend(default_options, options);
		
		$(this).html(message).css(final_options);
		return this;
	};
	
}(jQuery));
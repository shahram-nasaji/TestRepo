(function($) {
	
    $.fn.calc = function (num1, num2, options) {

        var fixed_options = $.extend($.fn.calc.default_options, options);

        return $(this).each(function () {
            return $(this).html(fixed_options.title + eval(num1 + fixed_options.operation + num2)).css({ "color": fixed_options.color, "direction": fixed_options.direction });
        });

    };


    $.fn.calc.default_options = {
        operation: "+",
        color: "red",
        title: "The result is: ",
        direction: "ltr"
    };
}(jQuery));
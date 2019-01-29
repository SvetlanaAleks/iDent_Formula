$(document).ready(function(){
	$('.count').text('0,0');
    $('.count').spincrement({
        decimalPoint: ",",
        decimalPlaces: 1,
        duration: 2000
    });
});


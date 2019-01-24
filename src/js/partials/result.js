$(document).ready(function(){
	$('.result__number').text('0,0');
    $('.result__number').spincrement({
        decimalPoint: ",",
        decimalPlaces: 1,
        duration: 2000
    });
});


$('.faq__arrow').click(function(){
	$(this).prev().find('.faq__answer').slideToggle();
	$(this).prev().find('.faq__question').toggleClass('active');

	$(this).toggleClass('active');
});
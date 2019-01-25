$('.advanteges__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true,
	prevArrow: '<button class="advanteges__arrow advanteges__arrow-prev"></button>',
    nextArrow: '<button class="advanteges__arrow advanteges__arrow-next"></button>',
    responsive: [
	    {
	      breakpoint: 479,
	      settings: {
	        dots: false
	      }
	    },
    ]
});


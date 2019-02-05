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


let flag = true;

$(".advanteges__before").mouseenter(function(){
  if (flag) {
    flag = false;
    $(this).removeClass('out').addClass('over');
    $(this).next().removeClass('out').addClass('over');
    $(this).next().addClass('start');
  } else {
    return;
  }
  setTimeout(function(){
    flag = true;
  }, 800)

});

$(".advanteges__after").mouseenter(function(){
  if (flag === true && $(this).hasClass('start')) {
    flag = false;
    $(this).removeClass('over').addClass('out');
    $(this).prev().removeClass('over').addClass('out');
    $(this).removeClass('start');
  } else {
    return;
  }
  setTimeout(function(){
    flag = true;
  }, 800)
});


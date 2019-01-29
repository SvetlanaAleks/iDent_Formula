let slider1 = $('.feature__slider');
let sliderElements;

function initSlider(slider, options) {
  slider.on('init', function () {
    setTimeout(function () {
      slider.addClass('is-ready');
    }, 100);
  });
  slider.not('.slick-initialized').slick(options);
}


function destroySlider(slider) {
  if (slider.hasClass('slick-initialized')) {
    slider.slick('unslick');
  }
}


function showSlider() {
  var tablet = ($(window).width()) < 1024;
  if (tablet) {
    initSlider(slider1, {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      arrow: true,
      dots: false,
      prevArrow: '<button class="feature__arrow feature__arrow-prev"></button>',
      nextArrow: '<button class="feature__arrow feature__arrow-next"></button>',
      responsive: [
      	{
      		breakpoint: 768,
      		settings: {
      			slidesToShow: 2,
      			slidesToScroll: 1
      		}
      	},
      	{
      		breakpoint: 640,
      		settings: {
      			slidesToShow: 1,
      			slidesToScroll: 1
      		}
      	}
      ]
    });
  } else {
    destroySlider(slider1);
  }
};
showSlider();
$(window).on('resize', showSlider);

var sliderReviews = $(".reviews__slider");
var slidesCount = 0;
var prevSlideIndex = 0;
var nextSlideIndex = 0;
var previewPrev = $("#js_preview-prev");
var previewNext = $("#js_preview-next");

sliderReviews.on("beforeChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  $(".slide-content").removeClass("slide-content-active");
});

$(document).on("click", ".js-show-more", function () {
  var _this = $(this);
  var contentReviews = _this.siblings(".slide-content");
  contentReviews.toggleClass("slide-content-active");
});



sliderReviews.on("init", function (event, slick) {
  slidesCount = slick.$slides.length;
  prevSlideIndex = slidesCount - 1;
  nextSlideIndex = 1;
});

sliderReviews.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
  prevArrow: '<button class="arrow arrow-prev"></button>',
  nextArrow: '<button class="arrow arrow-next"></button>'
});

previewPrev.click(function (e) {
  e.preventDefault();
  sliderReviews.slick("slickPrev");
});

previewNext.click(function (e) {
  e.preventDefault();
  sliderReviews.slick("slickNext");
});


sliderReviews.on("afterChange", function (event, slick, currentSlide) {
  var status = $('.paging');

  prevSlideIndex = currentSlide - 1;
  nextSlideIndex = currentSlide + 1;

  if (currentSlide === slidesCount - 1) {
    nextSlideIndex = 0;
  }
  if (currentSlide === 0) {
    prevSlideIndex = slidesCount - 1;
  }
  var i = (currentSlide ? currentSlide : 0) + 1;
  status.text(i + ' / ' + slick.slideCount);

  previewPrev.html(getPreview(prevSlideIndex));
  previewNext.html(getPreview(nextSlideIndex));
});

function getPreview(index) {
  var slide = $("#slick-slide0" + index);
  if (slide.length) {
    var photoSrc1 = slide.find(".slide__img .img-wrap .review--before").attr("src");
    var photoSrc2 = slide.find(".slide__img .img-wrap .review--after").attr("src");

    var photoHtml = '<div class="img-wrap img-wrap--before"><img src="' + photoSrc1 + '" alt="review" class="review review--before"></div><div class="img-wrap img-wrap--after"><img src="' + photoSrc2 + '" alt="review" class="review review--after"></div>';
  }
  return '<div class="preview-item__content">' + photoHtml + "</div>";
}
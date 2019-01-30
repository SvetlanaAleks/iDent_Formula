//=require ../../node_modules/object-fit-images/dist/ofi.min.js
//=require ../../node_modules/slick-carousel/slick/slick.min.js
//=require partials/slider.js
//=require partials/app.js
//=require partials/advanteges.js
//=require partials/result.js
//=require partials/feature.js
//=require partials/faq.js

$(document).ready(function () {
  App.init();
});


$(document).ready(function () {
  function animateLink() {
    var link = location.hash;
    if (link) {
      var top = $('[data-id="' + link.replace('#', "") + '"]').offset().top;
      console.log(link);
      $('body,html').animate({ scrollTop: top }, 800);
    }
  }

  animateLink();

})
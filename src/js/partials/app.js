const App = (function () {
  "use strict";
  const menuBtn = $(".js_menu-show");
  const nav = $(".js_nav");
  return {
    shouMainMenu: function () {
      const menu = $(".menu-wrap");
      menuBtn.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        _this.toggleClass("menu--active");

        const href = _this.data("target");
        menu.toggleClass("menu-wrap--active");

        const navMenu = _this.parent(".nav-wrap");
        const nav = navMenu.parents(".js_nav");
        nav.toggleClass("nav--active");
      });
    },
    eventScrollMenu: function () {
      const element = $(".js_none");

      const DOC = $(document);
      const scrollHeight = 150;

      DOC.scroll(function () {
        const scrollTop = DOC.scrollTop();
        const percent = (1 - scrollTop / scrollHeight).toFixed(2);
        if (percent > 0.95) {
          element.css("display", "");
          element.css({ opacity: percent, display: "" });
          nav.css("background", "");
          nav.css("box-shadow", "");
          nav.css({ opacity: percent, background: "" });
        } else {
          element.css("display", "block");
          nav.css("background", "white");
          nav.css("box-shadow", "10px 17.3px 35px 0 rgba(66, 97, 106, 0.2)");
        }
      });
    },
    scrollToTarget: function scrollToTarget() {
      $(".js_scrollTo").click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        if ($(target).length) {
          $('html, body').animate({
            scrollTop: $(target).offset().top - 100
          }, 800);
        } else {
          window.location.href = './' + target;
        }
      });
    },
    init: function () {
      App.shouMainMenu();
      App.eventScrollMenu();
      App.scrollToTarget();
    }
  };
})();



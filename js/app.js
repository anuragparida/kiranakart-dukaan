!(function ($) {
  "use strict";
  // Loader
  $(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  });

  // Menu
  $(".navbar-toggle").on("click", function (event) {
    $(this).toggleClass("open");
    $("#navigation").slideToggle(400);
  });

  $(".navigation-menu>li").slice(-1).addClass("last-elements");

  $(".menu-arrow,.submenu-arrow").on("click", function (e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      $(this)
        .parent("li")
        .toggleClass("open")
        .find(".submenu:first")
        .toggleClass("open");
    }
  });

  $(".navigation-menu a").each(function () {
    if (this.href == window.location.href) {
      $(this).parent().addClass("active");
      $(this).parent().parent().parent().addClass("active");
      $(this).parent().parent().parent().parent().parent().addClass("active");
    }
  });

  // Clickable Menu
  $(".has-submenu a").click(function () {
    if (window.innerWidth < 992) {
      if ($(this).parent().hasClass("open")) {
        $(this).siblings(".submenu").removeClass("open");
        $(this).parent().removeClass("open");
      } else {
        $(this).siblings(".submenu").addClass("open");
        $(this).parent().addClass("open");
      }
    }
  });

  $(".mouse-down").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 72,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  //Sticky
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".ssticky").addClass("nav-sticky");
    } else {
      $(".ssticky").removeClass("nav-sticky");
    }
  });

  // Back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 3000);
    return false;
  });

  //Tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  //Popover
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
  //Feather icon
  //feather.replace();
})(jQuery);

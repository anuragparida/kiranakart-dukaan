!(function ($) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $(".ksticky").addClass("raised-container position-fixed");
      $(".nav-logo").css("height", "inherit");
    } else {
      $(".ksticky").removeClass("raised-container position-fixed");
      $(".nav-logo").css("height", "auto");
    }
  });

  var ktestIndex = 0;

  var ktestContent = [
    {
      text:
        "KiranaKart helps us send payment reminders to our customers without bothering them. Better relationship, more business.",
      desc: "<strong>Rahul Sharma</strong>&nbsp;Kiranawala@Andheri",
    },
    {
      text:
        "payment reminders to our customers KiranaKart helps us send without bothering them. Better relationship, more business.",
      desc: "<strong>Pankaj Sharma</strong>&nbsp;Kiranawala@Andheri",
    },
    {
      text:
        "customers without bothering them. Better relationship, more business KiranaKart helps us send payment reminders to our.",
      desc: "<strong>Rohit Sharma</strong>&nbsp;Kiranawala@Andheri",
    },
  ];

  $(".fa-angle-left").on("click", function (event) {
    if (ktestIndex <= 0) {
      $(".fa-angle-left")
        .addClass("text-secondary")
        .removeClass("color-brand-dark");
    } else {
      ktestIndex -= 1;
      $(".fa-angle-left")
        .addClass("color-brand-dark")
        .removeClass("text-secondary");
      $(".fa-angle-right")
        .addClass("color-brand-dark")
        .removeClass("text-secondary");
      $(".ktest-text").text(ktestContent[ktestIndex].text);
      $(".ktest-text-ghost").text(ktestIndex + 1);
      $(".ktest-desc").html(ktestContent[ktestIndex].desc);
    }
    event.preventDefault();
  });

  $(".fa-angle-right").on("click", function (event) {
    if (ktestIndex >= ktestContent.length - 1) {
      $(".fa-angle-right")
        .addClass("text-secondary")
        .removeClass("color-brand-dark");
    } else {
      ktestIndex += 1;
      $(".fa-angle-right")
        .addClass("color-brand-dark")
        .removeClass("text-secondary");
      $(".fa-angle-left")
        .addClass("color-brand-dark")
        .removeClass("text-secondary");
      $(".ktest-text").text(ktestContent[ktestIndex].text);
      $(".ktest-text-ghost").text(ktestIndex + 1);
      $(".ktest-desc").html(ktestContent[ktestIndex].desc);
    }
    event.preventDefault();
  });
})(jQuery);

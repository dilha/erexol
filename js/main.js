var md = new MobileDetect(window.navigator.userAgent);
var viewport = $('meta[name="viewport"]');

if (md.mobile()) {
    viewport.attr("content", "width=480");
} else {
    viewport.attr("content", "width=device-width");
}

$(function () {
    $('select[name=country]').change(function () {
        if ($(this).val() === 'KZ') {

            $('body').removeClass('uz');
            $('body').addClass('kz');
        } else if ($(this).val() === 'UZ') {

            $('body').removeClass('kz');
            $('body').addClass('uz');
        } else if ($(this).val() === 'UA') {

            $('body').removeClass('uz');
            $('body').removeClass('kz');
        }
    })
});

$("form").leadprofit({
    hash: "686255f6-2fe8-4681-84cc-8afc8e1a7dae"
}).leadprofitSubmit({
    confirmUrl: '../../confirm.html',
    counterParams: {
        country: "{country}",
        version: document.location.pathname.replace(/\/+/g, '').replace('landings', '').replace('index.html', '').replace('index2.html', '').replace('confirm.html', '')
    }
});

$(document).ready(function () {

    // SCROLL TO FORM
    $(function(){

        $(".header__btn,.sec-7__btn,.sec-10__btn").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('data-id'),
            top = $(id).offset().top,
            top = top - 100;
            $('body,html').animate({scrollTop: top}, 1500);
        });

    });

    // countdownStart
    var storageCountdownReset = "countdownResetMachov2",
        storageCountdownTime = "countdownTimeMachov2",
        countdownResetTimeVal = 41,
        nowDateTime = new Date().getTime(),
        countdownReset = localStorage.getItem(storageCountdownReset);
    if (countdownReset == null) {
      localStorage.setItem(storageCountdownReset, nowDateTime)
    } else {
      if(nowDateTime - countdownReset > countdownResetTimeVal*60*1000) {
        var countdownTime = (new Date).getTime() + 24e5;
        localStorage.setItem(storageCountdownTime, countdownTime);
        localStorage.setItem(storageCountdownReset, nowDateTime);
      }
    }

    if (localStorage.getItem(storageCountdownTime)) {
      var countdownTime = localStorage.getItem(storageCountdownTime);
    } else {
      countdownTime = (new Date).getTime() + 24e5;
    }

    $('.countdown__wrap').countdown(countdownTime, function(event) {
      $(this).html(event.strftime('%H:%M:%S'));
      var $this = $(this).html(event.strftime(''
      + '<div class="countdown__item countdown__hour"><div class="countdown__block"> %H </div><div class="countdown__cap">часов</div></div><div class="countdown__item countdown__minute"><div class="countdown__block">%M</div><div class="countdown__cap">минут</div></div><div class="countdown__item countdown__second"><div class="countdown__block">%S</div><div class="countdown__cap">секунд</div></div>'
    )).on('update.countdown', function (e) {
      countdownTime = e.finalDate.getTime();
      localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function (e) {
      $('.countdown__wrap').countdown('stop');
    });
  });

});

// Href's'


$(document).ready(function(){
    $("#href").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top,
            go  = top - 100;

        $('body,html').animate({scrollTop: go}, 1500);
        $(".nav__menu").removeClass("nav__menu_active");
        $(".nav__wrap_active").hide(1000);
    });
});


// Mobile nav
$(document).ready(function () {

    $('.nav .container').prepend('<div class="nav__menu"></div>');

    $(".nav__menu").on("click", function(){
        $(".nav__wrap").slideToggle(500);
        $(".nav__wrap").addClass("nav__wrap_active");
        $(this).toggleClass("nav__menu_active");
    });

});
// Fixed nav
$(document).ready(function () {
    var nav = $('.nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 66) {
            nav.addClass("nav_fixed");
        } else {
            nav.removeClass("nav_fixed");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 110) {
            nav.addClass("nav_fixedlg");
        } else {
            nav.removeClass("nav_fixedlg");
        }
    });
});

// Popap
// $('.sec-12__img_pop').click(function () {

//     var popap = $('.popap'),
//         html = $('html');

//     html.addClass('popap_lock');
//     popap.show();

// });
// $('.popap__overlay ,.popap__close').click(function () {

//     var popap = $('.popap'),
//         html = $('html');

//     html.removeClass('popap_lock');
//     popap.hide();

// });
// setTimeout(function(){
//     $(document).mouseleave(function(e){
//         if (e.clientY < 0) {
//             $('.comeback').show();
//             $('html').addClass('popap_lock');
//         }
//     });
// }, 5000);

// $('.comeback__overlay ,.comeback__close').click(function () {

//     var comeback = $('.comeback'),
//         html = $('html');

//     html.removeClass('popap_lock');
//     comeback.hide();

// });
// $('.popap__prev, .popap__next').click(function () {
//     console.log(1);
//     var img_f = $('.popap__img:first'),
//         img_l = $('.popap__img:last');

//     if (img_f.hasClass('popap__img_active')){
//         img_f.removeClass('popap__img_active');
//         img_l.addClass('popap__img_active');
//     } else {
//         img_l.removeClass('popap__img_active');
//         img_f.addClass('popap__img_active');
//     }
// });

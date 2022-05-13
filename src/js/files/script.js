// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

$(".filter__item").click(function (event) {
    var i = $(this).data("filter");
    if (i == 1) {
        $(".portfolio__column").show();
    } else {
        $(".portfolio__column").hide();
        $(".portfolio__column.f_" + i).show();
    }
    $(".filter__item").removeClass("active");
    $(this).addClass("active");

    return false;
});

$(window).scroll(function (event) {
    var s = 0 - $(this).scrollTop() / 2;
    $(".mainblock__image").css("transform", "translate3d(0, " + s + "px, 0)");
});

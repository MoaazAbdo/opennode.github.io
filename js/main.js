/*global $,console,alert*/
$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $(".navbar").addClass("sticky");
        } else {
            if ($(".navbar").hasClass("sticky")) {
                $(".navbar").removeClass("sticky");
            }
        }
    });
    
    $(".navbar-toggler").click(function () {
        if ($(".navbar-toggler span").attr('class') === 'fas fa-bars') {
            $(".navbar-toggler span").attr("class", "fas fa-times");
        } else {
            $(".navbar-toggler span").attr("class", "fas fa-bars");
        }
    });
    
    var emptyPlace = "";
    $("[placeholder]").focus(function () {
        emptyPlace = $(this).attr("placeholder");
        $(this).attr("placeholder", "");
    }).blur(function () {
        $(this).attr("placeholder", emptyPlace);
        emptyPlace = "";
    });
    
    
});
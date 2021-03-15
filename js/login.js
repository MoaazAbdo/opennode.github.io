/*global $*/
$(document).ready(function () {
    "use strict";
    var placeAttr = "";
    $("[placeholder]").focus(function () {
        placeAttr = $(this).attr("placeholder");
        $(this).attr("placeholder", "");
    }).blur(function () {
        $(this).attr("placeholder", placeAttr);
        placeAttr = "";
    });
});
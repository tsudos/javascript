$(document).ready(function() {
    $("#sousmenu").mouseenter(function() {
        $(".login_form").css({
            display: "block"
        });
    });
});

$(document).ready(function() {
    $("#sousmenu").mouseleave(function() {
        $(".login_form").css({ display: "none" })
    });
});
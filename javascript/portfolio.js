function checkWindowSize() {
    var width = $(window).width();

    if (width < 650) {
        $(".footer-social-buttons > li > a > i").removeClass("fa-5x").addClass("fa-2x");
    }

    if (width < 370) {
        $(".container").removeClass("container").addClass("container-fluid");
    }

    if (width > 650) {
        $(".footer-social-buttons > li > a > p").css("font-size", "15px");
    }
}

function fluidNavBar() {
    var projects = $("#projects");
    var offsetY = projects.offset().top - 200;

    $(".navbar").affix({
        offset: {
            top: offsetY,
        }
    })
}

function animateSocialButtons() {
    var button = $(".fa-stack");

    button.hover(function() {
        $(this).addClass("button-hover");
    }, function() {
        $(this).removeClass("button-hover");
    });
}

$(document).ready(function() {
    checkWindowSize();
    fluidNavBar();
    animateSocialButtons();
});

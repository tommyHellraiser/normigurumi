// Responsive design elements

//  Menu initialization, cause it lags the first time for some reason
$("#menu_items").slideDown({
    start: function () {
        $(this).css({
            display: "flex"
        })
    },
    duration: 1,
});
$("#menu_items").slideToggle({duration: 1});

$(document).ready(function($) {
    $(window).on("resize", function() {
       if ($(window).width() < 500) {
           configure_for_mobile();
       } else {
           configure_for_desktop();
       }
    });
    if ($(window).width() < 500) {
        configure_for_mobile();
    } else {
        configure_for_desktop();
    }
});

function configure_for_mobile() {
    $('#logo_image').addClass('left_aligned').removeClass('middle_aligned');
    $('#location_footer').addClass('middle_aligned').removeClass('left_aligned');
    $('.contact_info').addClass('hidden');
    $('#contact_section_footer').removeClass('right_aligned_footer');
    $('.header_menu_buttons').addClass('hidden');
    $('.mobile_menu_button').removeClass('hidden');
}

function configure_for_desktop() {
    $('#logo_image').removeClass('left_aligned').addClass('middle_aligned');
    $('#location_footer').removeClass('middle_aligned').addClass('left_aligned');
    $('.contact_info').removeClass('hidden');
    $('#contact_section_footer').addClass('right_aligned_footer');
    $('.header_menu_buttons').removeClass('hidden');
    $('.mobile_menu_button').addClass('hidden');
}

// Mobile menu functionality

function drop_menu() {
    // var x = document.getElementById("menu_items");
    // if (x.style.display === "block") {
    //     x.style.display = "none";
    // }
    // else {
    //     x.style.display = "block";
    //    
    // }
    var menu = $("#menu_items");
    // menu.toggleClass("menu_expanded");
    // menu.slideToggle();
    if (menu.hasClass("menu_collapsed")) {
        menu.slideDown({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            },
            duration: 400,
        });
        menu.removeClass("menu_collapsed");
    } else {
        menu.slideUp(400);
        menu.addClass("menu_collapsed");
    }
}



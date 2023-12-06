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
       if ($(window).width() < 1050) {
           configure_for_mobile();
           if ($(window).width() < 600) {
               configure_for_cellphone();
           }
       } else {
           configure_for_desktop();
       }
    });
    if ($(window).width() < 1050) {
        configure_for_mobile();
        if ($(window).width() < 600) {
            configure_for_cellphone();
        }
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
    
    // Montessori page
    $("#montessori_description_title").addClass("text_centered").removeClass("text_left_aligned");
    $("#montessori_description_container").removeClass("container_row").addClass("container_col").addClass("align_center_hor_col");
    $("#montessori_description_content").addClass("text_centered").removeClass("width_50");

    // Categories page
    $("#key_container_1_categories").removeClass("container_row").addClass("container_col").addClass("align_center_hor_col");
    $("#key_container_2_categories").removeClass("container_row").addClass("container_col").addClass("align_center_hor_col");
    $(".remove_width_50").removeClass("width_50").removeClass("align_left_col").addClass("align_center_hor_row");
    $(".remove_card_horizontal").removeClass("card_horizontal").addClass("card");
    $(".text_to_center").addClass("text_centered");
}

function configure_for_cellphone() {

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




// Initialization of menu and footer
initialize_navbar_menu();
initialize_footer();

//  Initialization of document.onReady()
$(document).ready(function($) {

    /*  Navbar initialization  */
    if ($(window).width() < 900) {
        $("#desktop_menu").addClass("hidden");
        $("#mobile_menu").removeClass("hidden");
        configure_for_mobile();
    } else {
        $("#desktop_menu").removeClass("hidden");
        $("#mobile_menu").addClass("hidden");
        configure_for_desktop();
    }

    $(window).on("resize", function() {
        if ($(window).width() < 900) {
            $("#desktop_menu").addClass("hidden");
            $("#mobile_menu").removeClass("hidden");
            configure_for_mobile();
        } else {
            $("#desktop_menu").removeClass("hidden");
            $("#mobile_menu").addClass("hidden");
            configure_for_desktop();
        }
    });

    $("#menu_items").slideDown({
        start: function () {
            $(this).css({
                display: "flex"
            })
        },
        duration: 1,
    });
    $("#menu_items").slideToggle({duration: 1});

});

function initialize_footer() {
    $("#footer").html(get_footer_div());
}

function initialize_navbar_menu() {
    $("#navbar_menu").html(get_navbar_div());
}

//  Screen size configurations
function configure_for_mobile() {
    $('#logo_image').addClass('left_aligned').removeClass('middle_aligned');
    $('#location_footer').addClass('middle_aligned').removeClass('left_aligned');
    $('.contact_info').addClass('hidden');
    $('#contact_section_footer').removeClass('right_aligned_footer');
    // $('.header_menu_buttons').addClass('hidden');
    // $('.mobile_menu_button').removeClass('hidden');

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

function configure_for_desktop() {
    $('#logo_image').removeClass('left_aligned').addClass('middle_aligned');
    $('#location_footer').removeClass('middle_aligned').addClass('left_aligned');
    $('.contact_info').removeClass('hidden');
    $('#contact_section_footer').addClass('right_aligned_footer');
    // $('.header_menu_buttons').removeClass('hidden');
    // $('.mobile_menu_button').addClass('hidden');
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


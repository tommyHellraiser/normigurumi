// Responsive design elements

$(document).ready(function($) {
    // $(window).on("resize", function() {
    //    if ($(window).width() < 500) {
    //        console.log("Mobile!");
    //        $('#logo_image').addClass('left_aligned').removeClass('middle_aligned');
    //    } else {
    //        $('#logo_image').removeClass('left_aligned').addClass('middle_aligned');
    //    }
    // });
    if ($(window).width() < 500) {
        $('#logo_image').addClass('left_aligned').removeClass('middle_aligned');
        $('#location_footer').addClass('middle_aligned').removeClass('left_aligned');
        $('.contact_info').addClass('hidden');
        $('#contact_section_footer').removeClass('right_aligned_footer');
    } else {
        $('#logo_image').removeClass('left_aligned').addClass('middle_aligned');
        $('#location_footer').removeClass('middle_aligned').addClass('left_aligned');
        $('.contact_info').removeClass('hidden');
        $('#contact_section_footer').addClass('right_aligned_footer');
    }
});
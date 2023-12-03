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
    } else {
        $('#logo_image').removeClass('left_aligned').addClass('middle_aligned');
    }
});
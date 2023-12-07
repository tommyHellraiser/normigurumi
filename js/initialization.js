
$(document).ready(function($) {

    /*  Navbar initialization  */
    initialize_navbar_menu();

    /*  Footer initialization  */

    //  Footer section
    initialize_footer();

    //  Phone number
    $("#phone_number").text("+5492615105315");
    $("#phone_number_icon").attr("href", "https://wa.me/+5492615105315");

    //  Email
    $("#email").text("normigurumi@gmail.com");
    $("#email_icon").attr("href", "mailto:normigurumi@gmail.com");

    //  Instagram
    $("#instagram").text("@normigurumi_dolls");
    $("#instagram_icon").attr("href", "https://www.instagram.com/normigurumi_dolls/");

    //  Facebook
    $("#facebook").text("Normigurumi Dolls");
    $("#facebook_icon").attr("href", "#");

    //  Tiktok
    $("#tiktok").text("@normigurumi");
    $("#tiktok_icon").attr("href", "https://www.tiktok.com/@normigurumi");
});

function initialize_footer() {
    $("#footer").html("<div class=\"footer_container\">\n" +
        "\n" +
        "      <!--      Left footer section-->\n" +
        "      <div id=\"location_footer\" class=\"footer_section left_aligned location_text_footer\">\n" +
        "        <div id=\"footer_location_text\" class=\"common_text_par\">\n" +
        "          Mendoza, Argentina.\n" +
        "          <br>\n" +
        "          <br>\n" +
        "          Nation-wide shipping.\n" +
        "          <br>\n" +
        "          <br>\n" +
        "          Contact us for international shippings.\n" +
        "        </div>\n" +
        "      </div>\n" +
        "\n" +
        "      <!--      Center footer section-->\n" +
        "      <div class=\"footer_section middle_aligned_footer\">\n" +
        "\n" +
        "        <a href=\"index.html\" class=\"home_button\">\n" +
        "          <button id=\"footer_home_button\" class=\"footer_button\">Home</button>\n" +
        "        </a>\n" +
        "        <a href=\"about_us.html\" class=\"about_us_button\">\n" +
        "          <button id=\"footer_about_us_button\" class=\"footer_button\">About Us</button>\n" +
        "        </a>\n" +
        "        <a href=\"contact_us.html\" class=\"contact_us_button\">\n" +
        "          <button id=\"footer_contact_us_button\" class=\"footer_button\">Contact Us</button>\n" +
        "        </a>\n" +
        "        <a href=\"leave_review.html\" class=\"review_button\">\n" +
        "          <button id=\"footer_leave_review_button\" class=\"footer_button\">Leave a Review</button>\n" +
        "        </a>\n" +
        "        <a href=\"#\" class=\"privacy_policy_button\">\n" +
        "          <button id=\"footer_privacy_policy_button\" class=\"footer_button\">Privacy Policy</button>\n" +
        "        </a>\n" +
        "\n" +
        "      </div>\n" +
        "\n" +
        "      <!--      Right footer section-->\n" +
        "      <div id=\"contact_section_footer\" class=\"footer_section right_aligned_footer\">\n" +
        "\n" +
        "        <div class=\"contact_section common_text_par_small\">\n" +
        "\n" +
        "          <div class=\"contact_sub_section\">\n" +
        "            <a id=\"phone_number\" class=\"contact_info\"></a>\n" +
        "            <a id=\"phone_number_icon\" target=\"popup\"><img class=\"contact_icon\" src=\"img/resource/whatsapp.png\" alt=\"Whatsapp contact icon\" height=\"30px\"></a>\n" +
        "          </div>\n" +
        "\n" +
        "          <div class=\"contact_sub_section\">\n" +
        "            <a id=\"email\" class=\"contact_info\"></a>\n" +
        "            <a id=\"email_icon\" target=\"popup\"><img class=\"contact_icon\" src=\"img/resource/mail.png\" alt=\"Mail contact icon\" height=\"30px\"></a>\n" +
        "          </div>\n" +
        "\n" +
        "          <div class=\"contact_sub_section\">\n" +
        "            <a id=\"instagram\" class=\"contact_info\"></a>\n" +
        "            <a id=\"instagram_icon\" href=\"https://instagram.com/tommy_hellraiser25\" target=\"popup\"><img class=\"contact_icon\" src=\"img/resource/instagram.png\" alt=\"Instagram contact icon\" height=\"30px\"></a>\n" +
        "          </div>\n" +
        "\n" +
        "          <div class=\"contact_sub_section\">\n" +
        "            <a id=\"facebook\" class=\"contact_info\"></a>\n" +
        "            <a id=\"facebook_icon\" target=\"popup\"><img class=\"contact_icon\" src=\"img/resource/facebook.png\" alt=\"Facebook contact icon\" height=\"30px\"></a>\n" +
        "          </div>\n" +
        "\n" +
        "          <div class=\"contact_sub_section\">\n" +
        "            <a id=\"tiktok\" class=\"contact_info\"></a>\n" +
        "            <a id=\"tiktok_icon\" target=\"popup\"><img class=\"contact_icon\" src=\"img/resource/tiktok.png\" alt=\"Tiktok contact icon\" height=\"30px\"></a>\n" +
        "          </div>\n" +
        "\n" +
        "        </div>\n" +
        "\n" +
        "      </div>\n" +
        "\n" +
        "    </div>");

}

function initialize_navbar_menu() {
    $("#navbar_menu").html("<div class=\"first_header\">\n" +
        "\n" +
        "      <div class=\"header_section left_aligned header_menu_buttons\">\n" +
        "        <a href=\"index.html\" class=\"home_button\"><button id=\"home_button\" class=\"header_menu_button\">Home</button></a>\n" +
        "        <a href=\"categories.html\" class=\"categories_button\"><button id=\"store_button\" class=\"header_menu_button\">Categories</button></a>\n" +
        "        <a href=\"about_us.html\" class=\"about_us_button\"><button id=\"about_us_button\" class=\"header_menu_button\">About Us</button></a>\n" +
        "      </div>\n" +
        "\n" +
        "      <div id=\"logo_image\" class=\"header_section middle_aligned\">\n" +
        "        <div class=\"logo_container\">\n" +
        "          <a href=\"index.html\">\n" +
        "            <img src=\"img/logo_fix.png\"  alt=\"Normigurumi logo\" height=\"150px\">\n" +
        "          </a>\n" +
        "        </div>\n" +
        "      </div>\n" +
        "\n" +
        "      <div id=\"mobile_menu_button\" class=\"mobile_menu_button hidden\">\n" +
        "\n" +
        "        <img onclick=\"drop_menu()\" src=\"img/resource/menu.png\" alt=\"Menu button\" height=\"40px\">\n" +
        "\n" +
        "      </div>\n" +
        "\n" +
        "      <div class=\"header_section right_aligned header_menu_buttons\">\n" +
        "        <a href=\"contact_us.html\" class=\"contact_us_button\"><button id=\"contact_us_button\" class=\"header_menu_button\">Contact Us</button></a>\n" +
        "        <a href=\"leave_review.html\" class=\"review_button\"><button id=\"review_button\" class=\"header_menu_button\">Leave a Review</button></a>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "\n" +
        "    <div id=\"menu_items\" class=\"menu_items menu_collapsed\">\n" +
        "      <a href=\"index.html\" class=\"home_button menu_item common_text_par\">Home</a>\n" +
        "      <a href=\"categories.html\" class=\"categories_button menu_item common_text_par\">Categories</a>\n" +
        "      <a href=\"about_us.html\" class=\"about_us_button menu_item common_text_par\">About Us</a>\n" +
        "      <a href=\"contact_us.html\" class=\"contact_us_button menu_item common_text_par\">Contact Us</a>\n" +
        "      <a href=\"leave_review.html\" class=\"review_button menu_item common_text_par\">Leave a Review</a>\n" +
        "      <a href=\"https://wa.me/+5492615105315\" target=\"popup\" class=\"menu_item common_text_par\">\n" +
        "        <div class=\"container_row_custom\">\n" +
        "          <div class=\"chat_with_us_button common_text_par align_center padding_1_sides\">Chat With Us</div>\n" +
        "          <img class=\"mobile_menu_icon align_center\" src=\"img/resource/whatsapp.png\" alt=\"Whatsapp contact icon\" height=\"30px\">\n" +
        "        </div>\n" +
        "      </a>\n" +
        "    </div>");

    $("#menu_items").slideDown({
        start: function () {
            $(this).css({
                display: "flex"
            })
        },
        duration: 1,
    });
    $("#menu_items").slideToggle({duration: 1});
}


function get_navbar_div() {
    return `
<div id="desktop_menu">

    <div class="first_header">

        <div class="header_section left_aligned header_menu_buttons">
            <a href="index.html" class="home_button"><button id="home_button" class="header_menu_button">Home</button></a>
            <a href="categories.html" class="categories_button"><button id="store_button" class="header_menu_button">Categories</button></a>
            <a href="about_us.html" class="about_us_button"><button id="about_us_button" class="header_menu_button">About Us</button></a>
        </div>

        <div id="logo_image_desktop" class="header_section middle_aligned">
            <div class="logo_container">
                <a href="index.html">
                    <img src="img/logo_fix.png"  alt="Normigurumi logo" height="150px">
                </a>
            </div>
        </div>

        <div class="header_section right_aligned header_menu_buttons">
            <a href="contact_us.html" class="contact_us_button"><button id="contact_us_button" class="header_menu_button">Contact Us</button></a>
            <a href="leave_review.html" class="review_button"><button id="review_button" class="header_menu_button">Leave a Review</button></a>
        </div>
    </div>

</div>

<div id="mobile_menu" class="hidden">

    <div class="first_header">

        <div id="logo_image_mobile" class="header_section left_aligned">
            <div class="logo_container">
                <a href="index.html">
                    <img src="img/logo_fix.png"  alt="Normigurumi logo" height="150px">
                </a>
            </div>
        </div>

        <div id="mobile_menu_button" class="mobile_menu_button">

            <img id="mobile_menu_button_image" onclick="drop_menu()" src="img/resource/menu.png" alt="Menu button" height="40px">

        </div>

    </div>

    <div id="menu_items" class="menu_items menu_collapsed">
        <a href="index.html" class="home_button menu_item common_text_par">Home</a>
        <a href="categories.html" class="categories_button menu_item common_text_par">Categories</a>
        <a href="about_us.html" class="about_us_button menu_item common_text_par">About Us</a>
        <a href="contact_us.html" class="contact_us_button menu_item common_text_par">Contact Us</a>
        <a href="leave_review.html" class="review_button menu_item common_text_par">Leave a Review</a>
        <a href="https://wa.me/+5492615105315" target="popup" class="menu_item common_text_par">
            <div class="container_row_custom">
                <div class="chat_with_us_button common_text_par align_center padding_1_sides">Chat With Us</div>
                <img class="mobile_menu_icon align_center" src="img/resource/whatsapp.png" alt="Whatsapp contact icon" height="30px">
            </div>
        </a>
    </div>

</div>

    `
}
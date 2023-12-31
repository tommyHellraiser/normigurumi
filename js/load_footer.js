function get_footer_div() {
    return `
    <div class="footer_container">

      <!--      Left footer section-->
      <div id="location_footer_section" class="footer_section left_aligned location_text_footer">
        <div id="footer_location_text" class="common_text_par">
          Mendoza, Argentina.
          <br>
          <br>
          Nation-wide shipping.
          <br>
          <br>
          Contact us for international shippings.
        </div>
      </div>

      <!--      Center footer section-->
      <div id="menu_footer_section" class="footer_section middle_aligned_footer">

        <a href="index.html">
          <button id="footer_home_button" class="home_button footer_button">Home</button>
        </a>
        <a href="about_us.html">
          <button id="footer_about_us_button" class="about_us_button footer_button">About Us</button>
        </a>
        <a href="contact_us.html">
          <button id="footer_contact_us_button" class="contact_us_button footer_button">Contact Us</button>
        </a>
        <a href="leave_review.html">
          <button id="footer_leave_review_button" class="review_button footer_button">Leave a Review</button>
        </a>
        <a href="privacy_policy.html">
          <button id="footer_privacy_policy_button" class="privacy_policy_button footer_button">Privacy Policy</button>
        </a>

      </div>

      <!--      Right footer section-->
      <div id="contact_section_footer" class="footer_section right_aligned_footer">

        <div class="contact_section common_text_par_small">

          <div class="contact_sub_section">
            <a id="phone_number" class="contact_info">+5492615105315</a>
            <a id="phone_number_icon" href="https://wa.me/+5492615105315" target="popup"><img class="contact_icon" src="img/resource/whatsapp.png" alt="Whatsapp contact icon" height="30px"></a>
          </div>

          <div class="contact_sub_section">
            <a id="email" class="contact_info">normigurumi@gmail.com</a>
            <a id="email_icon" href="mailto:normigurumi@gmail.com" target="popup"><img class="contact_icon" src="img/resource/mail.png" alt="Mail contact icon" height="30px"></a>
          </div>

          <div class="contact_sub_section">
            <a id="instagram" class="contact_info">@normigurumi_dolls</a>
            <a id="instagram_icon" href="https://www.instagram.com/normigurumi_dolls/" target="popup"><img class="contact_icon" src="img/resource/instagram.png" alt="Instagram contact icon" height="30px"></a>
          </div>

          <div class="contact_sub_section">
            <a id="facebook" class="contact_info">Normigurumi Dolls</a>
            <a id="facebook_icon" href="#" target="popup"><img class="contact_icon" src="img/resource/facebook.png" alt="Facebook contact icon" height="30px"></a>
          </div>

          <div class="contact_sub_section">
            <a id="tiktok" class="contact_info">@normigurumi</a>
            <a id="tiktok_icon" href="https://www.tiktok.com/@normigurumi" target="popup"><img class="contact_icon" src="img/resource/tiktok.png" alt="Tiktok contact icon" height="30px"></a>
          </div>

        </div>

      </div>

    </div>
    `
}

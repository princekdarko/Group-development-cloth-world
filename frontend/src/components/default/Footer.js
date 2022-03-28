import React from "react";
import footerLogo from "../../assets/images/footer-Logo.png";

const Footer = () => {
  return (
    <footer>
      <center>
        <img class="footer-logo" src={footerLogo} alt="" />
        <p id="footer-paragraph">
          Premium Quality Clothes at the best and most affordable price. <br />
          we have a new offer every day for 365 days
        </p>
        <h4>Contact</h4>
        <p id="footer-email">
          E-mail : hurry@clothworld.com | Hotline: +1 131 138 138
        </p>
        <hr id="footer-hr" />
        <p id="right-reserved">
          DESIGN BY CLOTH WORLD - © 2022. ALL RIGHTS RESERVED.
        </p>
      </center>
    </footer>
  );
};

export default Footer;

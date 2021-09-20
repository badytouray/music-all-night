import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
// import NewletterSubscribe from "../NewsLetter/NewsletterSubscribe";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to receive our latest news, interviews and event updates.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
          {/* <NewletterSubscribe /> */}
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About M.A.N</h2>
            <Link to="/news">News</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/location">Join the Team</Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/faq">FAQ</Link>
            
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://www.instagram.com/musicall_night/" }}>Instagram</Link>
            <Link to={{ pathname: "https://facebook.com/musicall.nightuk/" }}>Facebook</Link>
            <Link to={{ pathname: "https://twitter.com/musicall_night" }}>Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Music All Night
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">Music All Night © 2021 - Designed by www.Wpmm.com</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              href="/"
              target="/"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="/"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="/"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

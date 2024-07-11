import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-logo">
          <img src="path_to_tronix_logo" alt="Tronix Solution" />
        </div>
        <div className="footer-info">
          <div className="footer-item">
            <i className="fas fa-phone"></i>
            <div className="footer-text">
              <h3>Phone Number</h3>
              <p>(+202) 2156-2145</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="fas fa-envelope"></i>
            <div className="footer-text">
              <h3>Email Us Here</h3>
              <p>info@tronix.com</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="fas fa-map-marker-alt"></i>
            <div className="footer-text">
              <h3>Office Address</h3>
              <p>251 Hilton, Berlin DE</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-secondary">
        <div className="footer-column">
          <h3>About Company</h3>
          <p>At TechPros Solutions, we are about technology and dedicated to providing IT solutions for businesses of all sizes.</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Meet Our Team</a></li>
            <li><a href="/news-media">News & Media</a></li>
            <li><a href="/projects">Our Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>What We Do</h3>
          <ul>
            <li>Cyber Security</li>
            <li>IT Management</li>
            <li>QA & Testing</li>
            <li>Infrastructure Plan</li>
            <li>Plan IT Consultant</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Popular Posts</h3>
          <div className="post">
            {/* <img src="path_to_image_1" alt="Your Business Safe" /> */}
            <p>June 4, 2023</p>
            <p>Your Business Safe...</p>
            <a href="/your-business-safe">READ MORE ➔</a>
          </div>
          <div className="post">
            {/* <img src="path_to_image_2" alt="Data Backup and..." /> */}
            <p>June 4, 2023</p>
            <p>Data Backup and...</p>
            <a href="/data-backup-and">READ MORE ➔</a>
          </div>
        </div>
      </footer>

      <footer className="footer-bottom">
        <p>© Copyright 2024 Tronix All Rights Reserved Themepul</p>
        <p>
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;

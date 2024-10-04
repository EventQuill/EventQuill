import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are a college event management platform that helps organize and promote the best college events across the globe.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <div><Link to="/" className="item">Home</Link></div>
          <div><Link to="/about" className="item">About US</Link></div>
          <div><Link to="/gallery" className="item">Gallery</Link></div>
          <div><Link to="/events" className="item">Events</Link></div>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>123 Event Street, College City, World</p>
          <p>Email: info@eventplatform.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 EventPlatform. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

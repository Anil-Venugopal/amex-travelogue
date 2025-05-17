import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4 className="footer-title">Amex Travelogue</h4>
            <p className="footer-description">
              Crafting unforgettable journeys and preserving travel memories that last a lifetime.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener" className="social-link">
                <span className="social-icon">𝕏</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="social-link">
                <span className="social-icon">Ig</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener" className="social-link">
                <span className="social-icon">Pin</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Explore</h5>
            <ul className="footer-links">
              <li><Link to="/new-travel-plan">New Travel Plan</Link></li>
              <li><Link to="/upcoming-travels">Upcoming Travels</Link></li>
              <li><Link to="/memories">Memories</Link></li>
              <li><Link to="/group-travel">Group Travel</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/press">Press</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Legal</h5>
            <ul className="footer-links">
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Amex Travelogue. All rights reserved.
          </p>
          <div className="footer-locale">
            <span className="locale-selector">English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
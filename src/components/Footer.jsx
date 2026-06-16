import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main section-container">
        <div className="footer-brand">
          <div className="footer-logo">The Cafecito<span className="logo-dot">.</span></div>
          <p className="footer-tagline">Where Hygiene Meets Taste.</p>
          <a
            href="https://www.instagram.com/thecafecito.in"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @thecafecito.in
          </a>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/visit">Visit Us</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact & Hours</h4>
          <p>Shop No 2, Marium Nagar, Sewa Nagar,<br />Ghaziabad, Uttar Pradesh 201001</p>
          <a href="tel:+919811927262" className="footer-phone">+91 98119 27262</a>
          <p className="footer-hours">
            <span className="hours-dot">●</span> Mon–Sun: 11:00 AM – 10:00 PM
          </p>
        </div>

        <div className="footer-order">
          <h4>Order Online</h4>
          <p>Get your favourites delivered fresh.</p>
          <a
            href="https://zomato.onelink.me/xqzv/i32n07wd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '16px', fontSize: '14px', padding: '12px 24px' }}
          >
            🍽 Order on Zomato
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-container footer-bottom-inner">
          <span>© 2025 The Cafecito. All rights reserved.</span>
          <span>Made with 🧡 in Ghaziabad, UP</span>
        </div>
      </div>
    </footer>
  );
}

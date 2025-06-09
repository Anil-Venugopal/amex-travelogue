import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navbar.css';

const PAGE_TITLES = {
  '/new-travel-plan': 'Create Plan',
  '/upcoming-travels': 'Upcoming Travels',
  '/memories': 'Memories',
  '/group-travel': 'Group Travel',
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Toggle body scroll and menu-open class when menuOpen changes
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  // Add solid background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine page title for subpages
  const pageTitle = PAGE_TITLES[location.pathname] || '';

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-title-group">
            <Link to="/" className="navbar-logo">
              <span className="logo-text">Amex Travelogue</span>
            </Link>
            {pageTitle && (
              <span className="navbar-page-title">| {pageTitle}</span>
            )}
          </div>
          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="menu-text">{menuOpen ? 'CLOSE' : 'MENU'}</span>
            <span className="menu-icon"></span>
          </button>
        </div>
      </header>

      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            CLOSE <span className="menu-close-arrow">→</span>
          </button>
          <div className="menu-heading">
            {/* <span className="menu-heading-main">Start your</span>
            <span className="menu-heading-sub">Journey</span> */}
          </div>
          <nav className="menu-nav">
            <Link to="/new-travel-plan" className="menu-link">New Travel Plan</Link>
            <Link to="/upcoming-travels" className="menu-link">Upcoming Travels</Link>
            <Link to="/memories" className="menu-link">Memories</Link>
            <Link to="/group-travel" className="menu-link">Group Travel</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
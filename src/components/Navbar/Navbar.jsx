import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'Destinations', href: '/destinations', sub: ['Cairo', 'Luxor', 'Aswan', 'Alexandria', 'Hurghada', 'Siwa'] },
  { label: 'Tours', href: '/tours', sub: ['Luxury Tours', 'Nile Cruises', 'Desert Safaris', 'Cultural Tours'] },
  { label: 'AI Planner', href: '/ai-planner', gold: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 2.4 }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 2 L34 32 H2 Z" fill="none" stroke="url(#nGold)" strokeWidth="1.2"/>
                <circle cx="18" cy="18" r="5" fill="url(#nGold)" opacity="0.9"/>
                <path d="M10 28 L18 10 L26 28" fill="none" stroke="url(#nGold)" strokeWidth="0.8" opacity="0.5"/>
                <defs>
                  <linearGradient id="nGold" x1="0" y1="0" x2="36" y2="36">
                    <stop offset="0%" stopColor="#fcd34d"/>
                    <stop offset="100%" stopColor="#b8860b"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="navbar-logo-text">
              <span className="navbar-logo-top">GOLDEN</span>
              <span className="navbar-logo-bottom">Egypt Tours</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="navbar-item"
                onMouseEnter={() => link.sub && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.href}
                  className={`navbar-link ${link.gold ? 'navbar-link--gold' : ''} ${location.pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                  {link.sub && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="navbar-chevron">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.sub && activeDropdown === link.label && (
                    <motion.div
                      className="navbar-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.sub.map((item) => (
                        <Link
                          key={item}
                          to={`${link.href}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="navbar-dropdown-item"
                        >
                          <span className="dropdown-dot"/>
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="navbar-actions">
            <Link to="/ai-planner" className="navbar-cta btn btn-gold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.09 8.26L20.18 9L16 13.14L17.18 19.27L12 16.4L6.82 19.27L8 13.14L3.82 9L9.91 8.26L12 2Z"/>
              </svg>
              Plan My Trip
            </Link>

            {/* Mobile Hamburger */}
            <button
              className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mobile-menu-inner">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link to={link.href} className={`mobile-link ${link.gold ? 'mobile-link--gold' : ''}`}>
                    {link.label}
                  </Link>
                  {link.sub && (
                    <div className="mobile-sub">
                      {link.sub.map((s) => (
                        <Link key={s} to={`${link.href}/${s.toLowerCase().replace(/\s+/g, '-')}`} className="mobile-sub-link">
                          {s}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link to="/ai-planner" className="btn btn-gold" style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>
                  Plan My Trip with AI
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

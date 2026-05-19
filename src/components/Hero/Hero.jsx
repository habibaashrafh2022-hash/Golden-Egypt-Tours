import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const slides = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1920&q=85',
    location: 'Giza Plateau',
    tagline: 'Where Legends Are Carved in Stone',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=85',
    location: 'Valley of the Kings, Luxor',
    tagline: 'Walk Among Ancient Gods',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85',
    location: 'Nile River',
    tagline: 'Sail the World\'s Greatest River',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1601999009162-2459b78386c9?w=1920&q=85',
    location: 'Abu Simbel',
    tagline: 'Witness Eternity, Feel Infinity',
  },
];

const stats = [
  { value: '+50', label: 'Destinations' },
  { value: '+10K', label: 'Travelers' },
  { value: '5★', label: 'Rated Luxury' },
  { value: '15+', label: 'Years of Excellence' },
];

const destinations = ['Cairo', 'Luxor', 'Aswan', 'Alexandria', 'Hurghada', 'Sharm El Sheikh', 'Siwa', 'Abu Simbel'];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  const goTo = (i) => {
    clearInterval(intervalRef.current);
    setPrev(current);
    setCurrent(i);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) navigate(`/destinations?q=${searchQuery}`);
  };

  const filteredDests = destinations.filter(d =>
    d.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="hero">
      {/* Slideshow */}
      <div className="hero-slides">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide ${i === current ? 'active' : ''} ${i === prev ? 'prev' : ''}`}
          >
            <img src={slide.image} alt={slide.location} className="hero-slide-img" loading={i === 0 ? 'eager' : 'lazy'}/>
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="hero-overlay"/>
      <div className="hero-overlay-bottom"/>

      {/* Pharaonic Pattern */}
      <div className="hero-pattern"/>

      {/* Content */}
      <div className="hero-content">
        <div className="container">

          {/* Badge */}
          <motion.div
            className="hero-badge badge-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.7 }}
          >
            <span className="hero-badge-dot"/>
            Luxury Egypt Travel Since 2009
          </motion.div>

          {/* Main heading */}
          <div className="hero-heading">
            <motion.div
              className="hero-heading-line"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="hero-title-main">Discover</span>
            </motion.div>

            <motion.div
              className="hero-heading-line"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="hero-title-gold">Ancient Egypt</span>
            </motion.div>

            <motion.div
              className="hero-heading-line"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="hero-title-sub">in Absolute Luxury</span>
            </motion.div>
          </div>

          {/* Tagline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              className="hero-tagline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              {slides[current].tagline}
            </motion.p>
          </AnimatePresence>

          {/* Search Bar */}
          <motion.div
            className={`hero-search ${searchFocused ? 'focused' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          >
            <form onSubmit={handleSearch} className="hero-search-form">
              <svg className="hero-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search destinations, tours, experiences…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="hero-search-input"
              />
              <button type="submit" className="hero-search-btn">
                Explore
              </button>
            </form>

            {/* Suggestions */}
            <AnimatePresence>
              {searchFocused && searchQuery && filteredDests.length > 0 && (
                <motion.div
                  className="hero-search-suggestions"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {filteredDests.map((d) => (
                    <button
                      key={d}
                      className="hero-suggestion-item"
                      onMouseDown={() => {
                        setSearchQuery(d);
                        navigate(`/destinations/${d.toLowerCase()}`);
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                      {d}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.7, duration: 0.8 }}
          >
            <Link to="/destinations" className="btn btn-gold hero-btn-primary">
              Explore Egypt
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/ai-planner" className="btn btn-outline hero-btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.09 8.26L20.18 9L16 13.14L17.18 19.27L12 16.4L6.82 19.27L8 13.14L3.82 9L9.91 8.26L12 2Z"/>
              </svg>
              Build AI Trip
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.0, duration: 0.8 }}
      >
        <div className="container">
          <div className="hero-stats-inner">
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Slide Controls */}
      <div className="hero-controls">
        {/* Location indicator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="hero-location"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-location-dot"/>
            {slides[current].location}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
      >
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel"/>
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}

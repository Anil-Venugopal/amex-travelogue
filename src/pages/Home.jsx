import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const scrollY = window.scrollY;
        const speed = element.getAttribute('data-speed') || 0.1;
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero home-hero">
        <div className="hero-bg"></div>
        <div className="hero-content animate-stagger">
          <h1 className="hero-title">Discover Your Next Adventure</h1>
          <p className="hero-subtitle">Create, plan, and relive travel experiences that last a lifetime.</p>
          <div className="hero-cta">
            <Link to="/new-travel-plan" className="btn btn-primary">Start Planning</Link>
            <Link to="/memories" className="btn btn-accent">Explore Memories</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header animate-slide-up">
            <h2 className="section-title">Your Complete Travel Companion</h2>
            <p className="section-subtitle">From planning to memories, we've got you covered</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3 className="feature-title">New Travel Plans</h3>
              <p className="feature-description">
                Create detailed travel itineraries with curated recommendations and personalized schedules.
              </p>
              <Link to="/new-travel-plan" className="feature-link">Plan a trip</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✈️</div>
              <h3 className="feature-title">Upcoming Travels</h3>
              <p className="feature-description">
                Track all your upcoming adventures, with countdown timers and preparation checklists.
              </p>
              <Link to="/upcoming-travels" className="feature-link">View trips</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3 className="feature-title">Travel Memories</h3>
              <p className="feature-description">
                Preserve and organize your travel memories with beautiful galleries and journal entries.
              </p>
              <Link to="/memories" className="feature-link">Explore memories</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Group Travel</h3>
              <p className="feature-description">
                Plan and coordinate trips with friends and family, with shared itineraries and expenses.
              </p>
              <Link to="/group-travel" className="feature-link">Start collaboration</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="destinations-section">
        <div className="parallax-container">
          <div className="parallax" data-speed="0.05">
            <div className="destination-bg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
          </div>
          
          <div className="container">
            <div className="section-header light animate-slide-up">
              <h2 className="section-title">Popular Destinations</h2>
              <p className="section-subtitle">Find inspiration for your next journey</p>
            </div>
            
            <div className="destinations-grid">
              <div className="destination-card">
                <div className="destination-img" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <div className="destination-content">
                  <h3 className="destination-title">Kyoto, Japan</h3>
                  <p className="destination-subtitle">Ancient temples & modern city life</p>
                </div>
              </div>
              
              <div className="destination-card">
                <div className="destination-img" style={{ backgroundImage: 'url(https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <div className="destination-content">
                  <h3 className="destination-title">Santorini, Greece</h3>
                  <p className="destination-subtitle">Breathtaking views & crystal waters</p>
                </div>
              </div>
              
              <div className="destination-card">
                <div className="destination-img" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <div className="destination-content">
                  <h3 className="destination-title">Machu Picchu, Peru</h3>
                  <p className="destination-subtitle">Ancient wonders & stunning landscapes</p>
                </div>
              </div>
              
              <div className="destination-card">
                <div className="destination-img" style={{ backgroundImage: 'url(https://images.pexels.com/photos/981091/pexels-photo-981091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <div className="destination-content">
                  <h3 className="destination-title">Bali, Indonesia</h3>
                  <p className="destination-subtitle">Paradise beaches & vibrant culture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-slide-up">
            <h2 className="section-title">What Travelers Say</h2>
            <p className="section-subtitle">Stories from our community</p>
          </div>
          
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Amex Travelogue transformed how I plan my trips. The interface is beautiful and the group planning feature made coordinating with friends so easy!"
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Travel Enthusiast</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "I love how I can keep all my travel memories in one place. The photo galleries and journal features help me relive my adventures whenever I want."
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Michael Chen</div>
                  <div className="author-title">Photographer & Explorer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-slide-up">
            <h2 className="cta-title">Ready for Your Next Adventure?</h2>
            <p className="cta-subtitle">Start planning your dream journey today</p>
            <Link to="/new-travel-plan" className="btn btn-accent cta-button">Create Travel Plan</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
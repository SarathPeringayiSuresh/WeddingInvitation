import React, { useEffect, useState } from 'react';
import './styles.css';

const WeddingHomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    const content = document.getElementById('content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wedding-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Video/Image */}
        <div className="hero-background">
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/Photos/NEKT WEDDING-4.jpg"
          >
            <source src="/Photos/Sarath Nivedhya Reel-2.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="/Photos/NEKT WEDDING-4.jpg" 
              alt="Wedding Background" 
              className="hero-fallback"
            />
          </video>
          <div className="hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
          <div className="couple-names">
            <h1 className="groom-name">Sarath</h1>
            <div className="ampersand">&</div>
            <h1 className="bride-name">Dr. Nivedhya Jith</h1>
          </div>
          
          <div className="wedding-date">
            <h2>January 4th, 2026</h2>
          </div>
          
          <div className="tagline">
            <p>"Two souls, one heart, forever together"</p>
          </div>

          <div className="venue-info">
            <p>Guruvayur Shri Krishna Temple</p>
            <p>Poonthanam Auditorium</p>
            <p>Corniche Convention Centre</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToContent}>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Scroll Down</p>
        </div>
      </section>

      {/* Content Section (placeholder for rest of site) */}
      <section id="content" className="content-section">
        <div className="content-wrapper">
          <h2>Welcome to Our Wedding</h2>
          <p>We're so excited to celebrate this special day with you!</p>
          <div className="photo-gallery-preview">
            <div className="photo-grid">
              <img src="/Photos/NW-20-1.jpg" alt="Wedding Photo 1" />
              <img src="/Photos/NW-6.jpg" alt="Wedding Photo 2" />
              <img src="/Photos/NW-63.jpg" alt="Wedding Photo 3" />
              <img src="/Photos/IMG-20250625-WA0011.jpg" alt="Wedding Photo 4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingHomePage;

import React, { useState, useEffect } from 'react';
import './Hero.css';
import githubIcon from '../github.png'; // Path to your GitHub icon
import linkedinIcon from '../linkedin.png'; // Path to your LinkedIn icon
import instagramIcon from '../facebook-new.png'; // Path to your Instagram icon
import profileImage from '../me.jpg'; // Path to your profile picture

const Hero = () => {
  const [isContentInView, setIsContentInView] = useState(false);
  const [isImageInView, setIsImageInView] = useState(false);

  useEffect(() => {
    // Observer for hero content (text)
    const observerContent = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsContentInView(true);
          } else {
            setIsContentInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const contentSection = document.querySelector('.hero-content');
    observerContent.observe(contentSection);

    // Observer for hero image
    const observerImage = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsImageInView(true);
          } else {
            setIsImageInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const imageSection = document.querySelector('.hero-image');
    observerImage.observe(imageSection);

    return () => {
      observerContent.disconnect();
      observerImage.disconnect();
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className={`hero-content ${isContentInView ? 'fade-in' : ''}`}>
        <h1>Front-End React Developer 👋</h1>
        <p>Hi, I'm Yasser. A passionate Front-end Developer focused on creating modern, user-friendly interfaces.</p>
        <div className="social-icons">
          <a href="https://github.com/k-yasser" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/kadid-yasser-739b7a316/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://www.facebook.com/yasser.kadid.5/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
        </div>
      </div>
      <div className={`hero-image ${isImageInView ? 'fade-in' : ''}`}>
        <img src={profileImage} alt="Yasser's Profile" className="profile-image" />
      </div>
    </section>
  );
};

export default Hero;

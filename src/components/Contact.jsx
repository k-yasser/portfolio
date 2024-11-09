import React, { useEffect, useState } from 'react';
import './Contact.css';

function Contact() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);  // Trigger animation when section is in view
          } else {
            setIsInView(false);  // Reset when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const section = document.querySelector("#contact");
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className={`contact-title ${isInView ? 'fade-in' : ''}`}>Get in Touch</h2>
        <p className={`contact-text ${isInView ? 'fade-in' : ''}`}>
          I'm always open to discuss new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the following channels:
        </p>
        
        <div className={`contact-details ${isInView ? 'fade-in' : ''}`}>
          <p><strong>Email:</strong> your-email@example.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

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
        <h2 className={`contact-title ${isInView ? 'fade-in' : ''}`}>Contact Me</h2>
        <p className={`contact-text ${isInView ? 'fade-in' : ''}`}>
          I would love to hear from you! Whether you have a question, a project idea, or just want to
          connect, feel free to send me a message. I'm always open to discussing new opportunities
          and collaborations.
        </p>
        
        <div className={`contact-form ${isInView ? 'fade-in' : ''}`}>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

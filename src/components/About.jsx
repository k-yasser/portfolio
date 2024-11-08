import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [isInView, setIsInView] = useState(false);
  const [isSkillsInView, setIsSkillsInView] = useState(false);
  const [isProgrammingInView, setIsProgrammingInView] = useState(false);

  useEffect(() => {
    // Observer for main section (title and text)
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.querySelector("#about");
    observer1.observe(aboutSection);

    // Observer for skills section
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsSkillsInView(true);
          } else {
            setIsSkillsInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.querySelector(".skills-section");
    observer2.observe(skillsSection);

    // Observer for programming languages section
    const observer3 = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsProgrammingInView(true);
          } else {
            setIsProgrammingInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const programmingSection = document.querySelector(".programming-section");
    observer3.observe(programmingSection);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className={`about-title ${isInView ? 'fade-in' : ''}`}>About Me</h2>
        <p className={`about-text ${isInView ? 'fade-in' : ''}`}>
          Hello! I'm Yasser, a passionate web developer with a keen interest in creating interactive and visually appealing web applications. I specialize in modern front-end technologies and continuously strive to expand my skill set to deliver high-quality solutions.
        </p>
        <p className={`about-text ${isInView ? 'fade-in' : ''}`}>
          With a strong foundation in both technical and design skills, I focus on developing user-friendly interfaces that enhance user experience. Whether it's a complex web app or a simple landing page, I aim to make every project engaging and efficient.
        </p>

        {/* Skills Section */}
        <div className={`skills-section ${isSkillsInView ? 'fade-in' : ''}`}>
          <h3>Skills & Technologies</h3>
          <ul className="skills-list">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Programming Languages Section */}
        <div className={`programming-section ${isProgrammingInView ? 'fade-in' : ''}`}>
          <h3>Programming Languages</h3>
          <ul className="programming-list">
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

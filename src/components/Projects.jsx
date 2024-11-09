import React, { useState, useEffect } from 'react';
import me from '../me.jpg';
import tiki from '../tiki.png'; 
import buyit from '../buy-it.png'; // replace with your actual image path
  // replace with your actual video path
import './Projects.css';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up'); // Add fade-up when card is in view
          } else {
            entry.target.classList.remove('fade-up'); // Remove fade-up when card is out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const projects = [
    {
      title: 'Tiki',
      description: 'Tiki is a mobile app which unable usersto book their bus ticket without loosing much time.They can also select their seats.',
      image: tiki,
      //video: projectVideo,
      github: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Buy-it',
      description: 'BUY-IT est une plateforme electronique qui permet aux utilisateurs d’acheter des produits enligne dans plusieurs boutiques gerer par les vendeurs avec une interface conviviale et un system securise.',
      image: buyit,
      //video: projectVideo,
      github: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Project 3',
      description: 'This is a brief description of Project 3.',
      image: me,
      //video: projectVideo,
      github: 'https://github.com/yourusername/project3'
    }
  ];

  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {hoveredProject === index ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="project-video"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

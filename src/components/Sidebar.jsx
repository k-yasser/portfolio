import React from 'react';
import './Sidebar.css';
import facebookLogo from '../facebook-new.png'
import githubLogo from '../github.png'
import linkedInLogo from '../linkedin.png'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="follow-me">
        <p>Follow Me</p>
        <div className="line"></div>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" className="social-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="Facebook" className="social-logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="Facebook" className="social-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

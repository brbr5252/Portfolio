import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'; // Using FaXTwitter for X (Twitter)
import { FaDownload } from 'react-icons/fa';
import './styles.scss';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <div className="social-links__icons">
        <a href="https://github.com/ibrahimAlhusaini" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ibrahim-alhusaini-2177632b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/ibrahimcs01?s=21&t=zUh8ffSpZ7g3PTZW46MVkg" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>

      <a href="..//..//IBRAHIM ALHUSAINI CV (2).pdf" download className="social-links__download-btn">
        <FaDownload className="icon" />
        Download CV
      </a>
    </div>
  );
};

export default SocialLinks;

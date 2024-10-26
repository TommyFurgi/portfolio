import React from 'react';
import profile from '../assets/images/profile-2.jpg';
import '../styles/About.css';
import cvPDF from '../assets/TomaszFurgala.pdf';

const About = () => {
  const openPDF = () => {
    window.open(cvPDF, '_blank');
  };

  return (
    <div name="about me" className="about-container">
      <div className="about-content">
        <div className="text-content">
          <h2 className="about-title">About me</h2>
          <p className="about-text">
            I am a passionate programmer with a strong background in web development and software engineering. 
            I have a deep love for technology and enjoy creating innovative solutions that make a difference.
          </p>
          <p className="about-text">
            I am a 3rd-year Computer Science student at the Faculty of Computer Science at AGH University. 
            Throughout my studies, I have gained experience in various programming languages and frameworks, 
            including JavaScript, Python, React, and Node.js. My journey has been fueled by a continuous desire 
            to learn and improve my skills.
          </p>
          <p className="about-text">
            I believe in the power of collaboration and open communication. Working on diverse projects has taught me 
            the importance of adaptability and problem-solving. Whether it's developing a new application, optimizing code, 
            or exploring new technologies, I am always up for a challenge.
          </p>
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>Programming Languages: Python, Java, JavaScript, C#, Erlang, and Elixir</li>
            <li>Frameworks and Libraries: React, Node.js, EF, Flask, Pygame, Phoenix, Ecto</li>
            <li>Tools and Technologies: Git, Docker, MySQL, PL/SQL, MongoDB, SQLite</li>
            <li>Soft Skills: Team Collaboration, Problem-Solving, Communication</li>
          </ul>
          <div className="button-container">
            <button onClick={openPDF} className="cv-button">
                Check My CV
            </button>
          </div>
          
        </div>
        <div className="image-content">
          <img 
            src={profile}
            alt="Tomasz's profile"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

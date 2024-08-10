import React from 'react';
import profile from '../assets/images/profile-1.jpg';
import { Link } from 'react-scroll';
import ArrowRight from '../assets/icons/ArrowRight';
import '../styles/Home.css';

const Home = () => {
  return (
    <div name="home" className="home-container">
      <div className="home-content">
        <div className="text-content">
          <h2 className="home-title">Welcome to My Portfolio</h2>
          <p className="home-description">
              Hello and welcome! My name is Tomasz, and I am passionate about programming. 
              This portfolio showcases my skills, projects, and professional journey. 
              I am dedicated to creating impactful and innovative solutions, and I am excited 
              to share my work with you.
          </p>
          <p className="home-description">
              On this website, you will find information about my background, my projects, 
              and how to get in touch with me. I invite you to explore and learn more about 
              what I do.
          </p>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="home-link"
          >
            Portfolio
            <span className="arrow-icon">
              <ArrowRight />
            </span>
          </Link>
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

export default Home;

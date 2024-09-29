import React from 'react';
import FingerPointingDown from '../assets/icons/FingerPointingDown';
import GreenArrow from '../assets/icons/GreenArrow';
import '../styles/Contact.css'; 

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <div className="header">
            <h2 className="contact-title">Reach Me!</h2>
            <FingerPointingDown />
        </div>
        <div className="content-links">
        
            <ul className="address-list">
                <li>
                    <GreenArrow className="icon" />
                    <p>Tomasz Furgała</p>
                </li>
                <li>
                    <GreenArrow className="icon" />
                    <p>tomaszfurgala23@gmail.com</p>
                </li>
                <li>
                    <GreenArrow className="icon" />
                    <p>+48 786 220 944</p>
                </li>
                <li>
                    <GreenArrow className="icon" />
                    <p> Witolda Budryka 2/411A,</p>
                </li>
                <li>
                    <p style={{ marginLeft: "2.2rem" }}>30-072 Kraków</p>
                </li>
            </ul>
            <ul className="contact-list">
                <li>
                    <a
                        href="https://github.com/TommyFurgi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-github"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/tomasz-furgała-482b50289/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-linkedin"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:tomaszfurgala23@gmail.com"
                        className="button button-email"
                    >
                        Email
                    </a>
                </li>
                <li>
                <a
                        href="https://leetcode.com/u/TommyFurgi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-leetcode"
                    >
                        Leetcode
                    </a>
                </li>
            </ul>

        </div>
        
      </div>
    </div>
  );
}

export default Contact;

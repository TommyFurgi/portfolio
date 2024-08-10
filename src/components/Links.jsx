import React from 'react';
import Github from '../assets/icons/Github';
import Linkedin from '../assets/icons/Linkedin';
import '../styles/Links.css'; 

const Links = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <Linkedin />
        </>
      ),
      href: "https://www.linkedin.com/in/tomasz-furgała-482b50289/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <Github />
        </>
      ),
      href: "https://github.com/TommyFurgi",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="links-container">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`link-item ${style}`}
          >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import OpenNav from '../assets/icons/OpenNav';
import CloseNav from '../assets/icons/CloseNav';
import '../styles/NavBar.css';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about me' },
    { id: 3, link: 'education'},
    { id: 4, link: 'portfolio' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Tomasz Furgała</h1>
      </div>
      <ul className={`links ${nav ? 'active' : ''}`}>
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth={true} duration={1000} onClick={() => setNav(false)}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="menu-toggle">
        {nav ? <CloseNav /> : <OpenNav />}
      </div>
    </div>
  );
};

export default NavBar;

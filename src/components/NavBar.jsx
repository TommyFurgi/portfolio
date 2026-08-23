import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import OpenNav from '../assets/icons/OpenNav';
import CloseNav from '../assets/icons/CloseNav';
import {
  BREAKPOINT_NAV_MOBILE,
  COLOR_BORDER,
  COLOR_NAVBAR,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_TEXT_SECONDARY,
  COLOR_WHITE,
  FONT_ACCENT,
  FONT_BODY,
  NAVBAR_HEIGHT,
  NAVBAR_SCROLL_OFFSET,
  SHADOW_NAVBAR,
  SIZE_LOGO,
  SIZE_NAV_LINK,
  SIZE_NAV_LINK_MOBILE,
  TRANSITION_DEFAULT,
} from './config/Constants';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: NAVBAR_HEIGHT,
  padding: '0 clamp(16px, 4vw, 48px)',
  backgroundColor: COLOR_NAVBAR,
  borderBottom: `1px solid ${COLOR_BORDER}`,
  boxShadow: SHADOW_NAVBAR,
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 50,
  boxSizing: 'border-box',
  fontFamily: FONT_BODY,
};

const logoStyle = {
  fontSize: SIZE_LOGO,
  color: COLOR_PRIMARY,
  fontFamily: FONT_ACCENT,
  fontWeight: 700,
  margin: 0,
  cursor: 'pointer',
};

const menuToggleStyle = {
  color: COLOR_PRIMARY,
  cursor: 'pointer',
  fontSize: '1.65rem',
};

const links = [
  { id: 1, link: 'home', label: 'Home' },
  { id: 2, link: 'about me', label: 'About' },
  { id: 3, link: 'education', label: 'Education' },
  { id: 4, link: 'projects', label: 'Projects' },
  { id: 5, link: 'contact', label: 'Contact' },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAKPOINT_NAV_MOBILE);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= BREAKPOINT_NAV_MOBILE);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobile && nav ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobile, nav]);

  const linksStyle = {
    display: isMobile ? (nav ? 'flex' : 'none') : 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: isMobile ? '28px' : '36px',
    ...(isMobile && nav && {
      position: 'fixed',
      top: NAVBAR_HEIGHT,
      left: 0,
      width: '100%',
      height: `calc(100vh - ${NAVBAR_HEIGHT})`,
      backgroundColor: COLOR_WHITE,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  };

  const getItemStyle = (id) => ({
    cursor: 'pointer',
    fontSize: isMobile ? SIZE_NAV_LINK_MOBILE : SIZE_NAV_LINK,
    fontWeight: 500,
    transition: `color ${TRANSITION_DEFAULT}`,
    color: hoveredId === id ? COLOR_PRIMARY_DARK : COLOR_TEXT_SECONDARY,
  });

  return (
    <nav style={navbarStyle}>
      <Link
        to="home"
        smooth
        duration={800}
        offset={NAVBAR_SCROLL_OFFSET}
        style={logoStyle}
        onClick={() => setNav(false)}
      >
        <h1 style={{ margin: 0, fontSize: 'inherit', fontWeight: 'inherit', fontFamily: 'inherit' }}>
          Tomasz Furgała
        </h1>
      </Link>

      <ul style={linksStyle}>
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            style={getItemStyle(id)}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link
              to={link}
              smooth={true}
              duration={800}
              offset={NAVBAR_SCROLL_OFFSET}
              onClick={() => setNav(false)}
              style={{ cursor: 'pointer' }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        style={{ ...menuToggleStyle, display: isMobile ? 'block' : 'none' }}
        onClick={() => setNav(!nav)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setNav(!nav)}
        aria-label={nav ? 'Close menu' : 'Open menu'}
      >
        {nav ? <CloseNav /> : <OpenNav />}
      </div>
    </nav>
  );
};

export default NavBar;

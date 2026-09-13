import React, { useState } from 'react';
import { SOCIAL_LINKS } from './config/SocialLinks';
import {
  BORDER_RADIUS,
  COLOR_BORDER,
  COLOR_TEXT_DARK,
  COLOR_WHITE,
  SHADOW_MD,
  SIZE_BODY,
} from './config/Constants';

const containerStyle = {
  position: 'fixed',
  top: '55%',
  left: 0,
  zIndex: 40,
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const itemStyle = {
  backgroundColor: COLOR_WHITE,
  border: `1px solid ${COLOR_BORDER}`,
  width: '180px',
  height: '60px',
  margin: '10px 0',
  display: 'flex',
  borderRadius: BORDER_RADIUS,
  boxShadow: SHADOW_MD,
  transition: 'transform 0.3s ease-in-out',
};

const anchorStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '0 14px 0 18px',
  color: COLOR_TEXT_DARK,
  textDecoration: 'none',
  fontSize: SIZE_BODY,
  fontWeight: 500,
};

const iconStyle = {
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
};

const Links = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <ul style={containerStyle}>
      {SOCIAL_LINKS.map(({ id, label, icon, href }) => (
        <li
          key={id}
          onMouseEnter={() => setHoveredId(id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            ...itemStyle,
            transform: hoveredId === id ? 'translateX(0)' : 'translateX(-122px)',
          }}
        >
          <a href={href} target="_blank" rel="noreferrer" style={anchorStyle}>
            {label}
            <div style={iconStyle}>{icon}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;

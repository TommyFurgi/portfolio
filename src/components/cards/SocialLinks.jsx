import React, { useState } from 'react';
import { BORDER_RADIUS, COLOR_WHITE, SIZE_BODY, SOCIAL_COLORS } from '../config/Constants';

const listStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const itemStyle = {
  width: '100%',
};

const linkBaseStyle = {
  display: 'inline-block',
  width: '100%',
  padding: '15px 0',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: BORDER_RADIUS,
  color: COLOR_WHITE,
  fontSize: SIZE_BODY,
  transition: 'all 0.3s ease',
};

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/TommyFurgi', type: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tomasz-furgała-482b50289/', type: 'linkedin' },
  { name: 'Email', url: 'mailto:tomaszfurgala23@gmail.com', type: 'email' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/TommyFurgi/', type: 'leetcode' },
];

const SocialLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getLinkStyle = (type, index) => ({
    ...linkBaseStyle,
    backgroundColor: SOCIAL_COLORS[type],
    filter: hoveredIndex === index ? 'brightness(0.8)' : 'brightness(1)',
  });

  return (
    <ul style={listStyle}>
      {SOCIAL_LINKS.map((link, index) => (
        <li key={link.type} style={itemStyle}>
          <a
            href={link.url}
            target={link.type !== 'email' ? '_blank' : '_self'}
            rel="noopener noreferrer"
            style={getLinkStyle(link.type, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;

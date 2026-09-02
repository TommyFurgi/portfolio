import React, { useEffect, useState } from 'react';
import EmailForm from './EmailForm';
import Github from '../../assets/icons/Github';
import Linkedin from '../../assets/icons/Linkedin';
import Leetcode from '../../assets/icons/Leetcode';
import ExternalLink from '../../assets/icons/ExternalLink';
import { CheckIcon, CopyIcon } from '../../assets/icons/CopyIcon';
import {
  BORDER_RADIUS,
  BORDER_RADIUS_LG,
  BREAKPOINT_MOBILE,
  COLOR_BORDER,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_TEXT_DARK,
  COLOR_WHITE,
  FONT_BODY,
  SHADOW_MD,
  SIZE_BODY,
  SIZE_BODY_LG,
  TRANSITION_DEFAULT,
} from '../config/Constants';
import { sectionHeaderStyle, sectionTitleStyle } from '../config/sharedStyles';

const EMAIL = 'tomaszfurgala23@gmail.com';

const CONTACT_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tomasz-furgała-482b50289/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/TommyFurgi',
    icon: Github,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/TommyFurgi/',
    icon: Leetcode,
  },
];

const sectionStyle = {
  textAlign: 'left',
};

const panelStyle = {
  backgroundColor: COLOR_WHITE,
  borderRadius: BORDER_RADIUS_LG,
  border: `1px solid ${COLOR_BORDER}`,
  boxShadow: SHADOW_MD,
  padding: '28px 32px',
  display: 'grid',
  gap: '28px',
};

const blockTitleStyle = {
  fontSize: SIZE_BODY,
  fontWeight: 700,
  color: COLOR_PRIMARY,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '0 0 14px',
  fontFamily: FONT_BODY,
};

const emailBoxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 14px',
  borderRadius: BORDER_RADIUS,
  border: `1px solid ${COLOR_BORDER}`,
  backgroundColor: COLOR_WHITE,
  cursor: 'pointer',
  marginBottom: '20px',
};

const emailTextStyle = {
  fontSize: SIZE_BODY_LG,
  color: COLOR_PRIMARY,
  fontWeight: 500,
  wordBreak: 'break-all',
};

const linksListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const getLinkRowStyle = (isHovered) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  padding: '12px 14px',
  borderRadius: BORDER_RADIUS,
  border: `1px solid ${isHovered ? COLOR_PRIMARY : COLOR_BORDER}`,
  textDecoration: 'none',
  fontSize: SIZE_BODY_LG,
  fontWeight: 500,
  transition: `border-color ${TRANSITION_DEFAULT}, color ${TRANSITION_DEFAULT}`,
  color: isHovered ? COLOR_PRIMARY_DARK : COLOR_TEXT_DARK,
});

const linkLeftStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const iconWrapStyle = {
  width: '22px',
  height: '22px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Contact = () => {
  const [isWide, setIsWide] = useState(window.innerWidth >= BREAKPOINT_MOBILE);
  const [copied, setCopied] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth >= BREAKPOINT_MOBILE);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const panelLayoutStyle = {
    ...panelStyle,
    gridTemplateColumns: isWide ? '1fr 1.1fr' : '1fr',
  };

  const formColumnStyle = isWide
    ? { borderLeft: `1px solid ${COLOR_BORDER}`, paddingLeft: '28px' }
    : { borderTop: `1px solid ${COLOR_BORDER}`, paddingTop: '24px' };

  return (
    <div style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <h2 style={sectionTitleStyle}>Contact</h2>
      </div>

      <div style={{ ...panelLayoutStyle, marginTop: '20px' }}>
        <section>
          <h3 style={blockTitleStyle}>Get in touch</h3>

          <div
            style={emailBoxStyle}
            onClick={handleCopy}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
            title="Copy email"
          >
            <span style={emailTextStyle}>{EMAIL}</span>
            {copied ? <CheckIcon /> : <CopyIcon />}
          </div>

          <ul style={linksListStyle}>
            {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={getLinkRowStyle(hoveredLink === label)}
                  onMouseEnter={() => setHoveredLink(label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span style={linkLeftStyle}>
                    <span style={iconWrapStyle}>
                      <Icon />
                    </span>
                    {label}
                  </span>
                  <ExternalLink size={16} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section style={formColumnStyle}>
          <h3 style={blockTitleStyle}>Send a message</h3>
          <EmailForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import {
  COLOR_BORDER,
  COLOR_FOOTER_BG,
  COLOR_TEXT_SECONDARY,
  FONT_BODY,
  SIZE_BODY,
} from './config/Constants';

const footerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: COLOR_FOOTER_BG,
  color: COLOR_TEXT_SECONDARY,
  fontSize: SIZE_BODY,
  fontFamily: FONT_BODY,
  padding: '20px',
  borderTop: `1px solid ${COLOR_BORDER}`,
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      Built with React · © 2026 Tomasz Furgała
    </div>
  );
};

export default Footer;

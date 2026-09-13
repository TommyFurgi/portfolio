import React from 'react';
import {
  COLOR_SECTION_MUTED,
  COLOR_SURFACE,
  COLOR_WHITE,
  NAVBAR_HEIGHT,
  SECTION_MAX_WIDTH,
  SECTION_TONE,
} from './config/Constants';

const getBackgroundColor = (tone) => {
  if (tone === SECTION_TONE.MUTED) return COLOR_SECTION_MUTED;
  if (tone === SECTION_TONE.SURFACE) return COLOR_SURFACE;
  return COLOR_WHITE;
};

const getWrapperStyle = (tone) => ({
  minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`,
  boxSizing: 'border-box',
  padding: '48px 28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: getBackgroundColor(tone),
});

const contentStyle = {
  width: '100%',
  maxWidth: SECTION_MAX_WIDTH,
};

const SectionWrapper = ({ children, tone = SECTION_TONE.WHITE, id }) => {
  return (
    <div id={id} style={getWrapperStyle(tone)}>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;

import React from 'react';
import {
  COLOR_SECTION_MUTED,
  COLOR_WHITE,
  SECTION_MAX_WIDTH,
  SECTION_TONE,
} from './config/Constants';

const getWrapperStyle = (tone, compact) => ({
  padding: compact ? '64px 28px 72px' : '88px 28px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: tone === SECTION_TONE.MUTED ? COLOR_SECTION_MUTED : COLOR_WHITE,
});

const contentStyle = {
  width: '100%',
  maxWidth: SECTION_MAX_WIDTH,
};

const SectionWrapper = ({ children, tone = SECTION_TONE.WHITE, compact = false }) => {
  return (
    <div style={getWrapperStyle(tone, compact)}>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;

import React from 'react';
import SocialLinks from './SocialLinks';
import EmailForm from './EmailForm';
import HandWave from '../../assets/icons/HandWave';
import {
  BORDER_RADIUS_LG,
  COLOR_BORDER,
  COLOR_WHITE,
  SHADOW_MD,
} from '../config/Constants';
import { sectionHeaderStyle, sectionTitleStyle } from '../config/sharedStyles';

const containerStyle = {
  width: '100%',
};

const headerStyle = {
  ...sectionHeaderStyle,
  alignItems: 'center',
  gap: '20px',
  marginBottom: '32px',
};

const iconWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingTop: '8px',
};

const gridStyle = {
  display: 'flex',
  gap: '24px',
  flexWrap: 'wrap',
  width: '100%',
};

const columnStyle = {
  flex: '1 1 300px',
  backgroundColor: COLOR_WHITE,
  borderRadius: BORDER_RADIUS_LG,
  border: `1px solid ${COLOR_BORDER}`,
  boxShadow: SHADOW_MD,
  padding: '28px',
};

const Contact = () => {
  return (
    <div id="contact" style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={sectionTitleStyle}>Let's Connect!</h2>
        <div style={iconWrapperStyle}>
          <HandWave />
        </div>
      </div>

      <div style={gridStyle}>
        <div style={columnStyle}>
          <EmailForm />
        </div>

        <div style={columnStyle}>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact;

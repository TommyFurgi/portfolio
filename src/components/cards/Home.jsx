import React, { useState, useEffect } from 'react';
import profile from '../../assets/images/profile-1.jpg';
import cvPDF from '../../assets/TomaszFurgala.pdf';
import { Link } from 'react-scroll';
import ExternalLink from '../../assets/icons/ExternalLink';
import {
  BORDER_RADIUS_LG,
  BREAKPOINT_HOME_MOBILE,
  COLOR_BORDER,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_LIGHT,
  COLOR_TEXT,
  COLOR_TEXT_DARK,
  COLOR_TEXT_SECONDARY,
  COLOR_WHITE,
  FONT_ACCENT,
  FONT_BODY,
  GRADIENT_HERO,
  NAVBAR_HEIGHT,
  NAVBAR_SCROLL_OFFSET,
  QUALTRICS_URL,
  SECTION_MAX_WIDTH,
  SHADOW_IMAGE,
  SIZE_BODY,
  SIZE_HERO_HEADING,
  TRANSITION_DEFAULT,
} from '../config/Constants';

const sectionStyle = {
  minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`,
  paddingTop: NAVBAR_HEIGHT,
  background: GRADIENT_HERO,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: FONT_BODY,
};

const containerStyle = {
  width: '100%',
  maxWidth: SECTION_MAX_WIDTH,
  padding: '52px 28px 88px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '44px',
};

const contentStyle = {
  flex: '1 1 400px',
  maxWidth: '560px',
};

const labelStyle = {
  fontFamily: FONT_ACCENT,
  fontSize: '1.925rem',
  color: COLOR_PRIMARY,
  margin: '0 0 10px',
};

const headingStyle = {
  fontSize: SIZE_HERO_HEADING,
  fontWeight: 700,
  color: COLOR_TEXT_DARK,
  margin: '0 0 12px',
  lineHeight: 1.15,
  letterSpacing: '-0.03em',
};

const atCompanyRowStyle = {
  display: 'block',
  marginTop: '10px',
  fontSize: '0.58em',
  fontWeight: 600,
  letterSpacing: '-0.01em',
};

const getCompanyLinkStyle = (isHovered) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  color: isHovered ? COLOR_PRIMARY_DARK : COLOR_PRIMARY,
  textDecoration: 'none',
  transition: `color ${TRANSITION_DEFAULT}`,
});

const credentialsStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '8px',
  fontSize: '0.95rem',
  color: COLOR_TEXT_SECONDARY,
  margin: '0 0 24px',
  lineHeight: 1.5,
};

const credentialDotStyle = {
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  backgroundColor: COLOR_BORDER,
  flexShrink: 0,
};

const descriptionStyle = {
  fontSize: SIZE_BODY,
  color: COLOR_TEXT,
  lineHeight: 1.7,
  margin: '0 0 32px',
  maxWidth: '480px',
};

const actionsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
};

const primaryButtonStyle = {
  padding: '13px 30px',
  borderRadius: '8px',
  fontSize: SIZE_BODY,
  fontWeight: 600,
  backgroundColor: COLOR_PRIMARY,
  color: COLOR_WHITE,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontFamily: FONT_BODY,
};

const secondaryButtonStyle = {
  padding: '13px 30px',
  borderRadius: '8px',
  fontSize: SIZE_BODY,
  fontWeight: 600,
  backgroundColor: 'transparent',
  color: COLOR_PRIMARY,
  border: `1.5px solid ${COLOR_PRIMARY}`,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontFamily: FONT_BODY,
};

const IMAGE_FRAME_WIDTH = 440;
const IMAGE_FRAME_HEIGHT = 578;
const IMAGE_ZOOM = 1.1;

const imageWrapperStyle = {
  flex: '0 0 auto',
  width: IMAGE_FRAME_WIDTH,
  height: IMAGE_FRAME_HEIGHT,
  borderRadius: BORDER_RADIUS_LG,
  overflow: 'hidden',
  boxShadow: SHADOW_IMAGE,
  position: 'relative',
};

const getProfileImageStyle = (frameWidth, frameHeight) => {
  const scaledWidth = frameWidth * IMAGE_ZOOM;
  const scaledHeight = frameHeight * IMAGE_ZOOM;

  return {
    position: 'absolute',
    width: scaledWidth,
    height: scaledHeight,
    left: (frameWidth - scaledWidth) / 2,
    top: (frameHeight - scaledHeight) / 2 - frameHeight * 0.02,
    objectFit: 'cover',
    objectPosition: 'center 8%',
    display: 'block',
  };
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAKPOINT_HOME_MOBILE);
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);
  const [companyHovered, setCompanyHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= BREAKPOINT_HOME_MOBILE);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layoutStyle = isMobile
    ? { ...containerStyle, flexDirection: 'column', textAlign: 'center', gap: '28px' }
    : containerStyle;

  const frameWidth = isMobile ? 264 : IMAGE_FRAME_WIDTH;
  const frameHeight = isMobile ? 330 : IMAGE_FRAME_HEIGHT;

  const imageFrameStyle = {
    ...imageWrapperStyle,
    width: frameWidth,
    height: frameHeight,
  };

  const textAlignStyle = isMobile ? { margin: '0 auto' } : {};

  const openCV = () => window.open(cvPDF, '_blank');

  return (
    <section id="home" style={sectionStyle}>
      <div style={layoutStyle}>
        <div style={contentStyle}>
          <p style={labelStyle}>Hi, I'm Tomasz</p>
          <h1 style={headingStyle}>
            Software Engineer
            <span style={atCompanyRowStyle}>
              <a
                href={QUALTRICS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={getCompanyLinkStyle(companyHovered)}
                onMouseEnter={() => setCompanyHovered(true)}
                onMouseLeave={() => setCompanyHovered(false)}
                aria-label="Qaltrics website"
              >
                at Qaltrics
                <ExternalLink size={24} />
              </a>
            </span>
          </h1>
          <div style={{ ...credentialsStyle, justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <span>B.Sc. Computer Science, AGH</span>
            <span style={credentialDotStyle} />
            <span>M.Sc. in progress</span>
            <span style={credentialDotStyle} />
            <span>Cracow</span>
          </div>
          <p style={{ ...descriptionStyle, ...textAlignStyle }}>
            I build web applications and software systems with a focus on clean code
            and practical solutions. Currently pursuing my Master's degree at AGH University
            of Science and Technology.
          </p>

          <div style={{ ...actionsStyle, justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <Link
              to="projects"
              smooth
              duration={800}
              offset={NAVBAR_SCROLL_OFFSET}
              style={{
                ...primaryButtonStyle,
                backgroundColor: primaryHovered ? COLOR_PRIMARY_DARK : COLOR_PRIMARY,
                display: 'inline-block',
                textDecoration: 'none',
              }}
              onMouseEnter={() => setPrimaryHovered(true)}
              onMouseLeave={() => setPrimaryHovered(false)}
            >
              View Projects
            </Link>
            <button
              type="button"
              onClick={openCV}
              style={{
                ...secondaryButtonStyle,
                backgroundColor: secondaryHovered ? COLOR_PRIMARY_LIGHT : 'transparent',
              }}
              onMouseEnter={() => setSecondaryHovered(true)}
              onMouseLeave={() => setSecondaryHovered(false)}
            >
              Download CV
            </button>
          </div>
        </div>

        <div style={imageFrameStyle}>
          <img
            src={profile}
            alt="Tomasz Furgała"
            width={3512}
            height={4888}
            decoding="sync"
            style={getProfileImageStyle(frameWidth, frameHeight)}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

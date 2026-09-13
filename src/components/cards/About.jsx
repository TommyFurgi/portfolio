import React, { useEffect, useState } from 'react';
import ExternalLink from '../../assets/icons/ExternalLink';
import {
  BORDER_RADIUS,
  BORDER_RADIUS_LG,
  BREAKPOINT_MOBILE,
  COLOR_BORDER,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_MID,
  COLOR_TEXT,
  COLOR_TEXT_DARK,
  COLOR_TEXT_SECONDARY,
  COLOR_WHITE,
  FONT_BODY,
  QUALTRICS_URL,
  SHADOW_MD,
  SIZE_BODY,
  SIZE_BODY_LG,
  SIZE_SUBHEADING,
  TRANSITION_DEFAULT,
} from '../config/Constants';
import { sectionHeaderStyle, sectionTitleStyle } from '../config/sharedStyles';

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const introBlockStyle = {
  margin: '20px 0 28px',
};

const introParagraphStyle = {
  color: COLOR_TEXT,
  margin: '0 0 16px',
  fontSize: SIZE_BODY_LG,
  lineHeight: 1.7,
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
  fontSize: SIZE_SUBHEADING,
  fontWeight: 700,
  color: COLOR_PRIMARY,
  margin: '0 0 16px',
  fontFamily: FONT_BODY,
};

const companyHeaderStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  gap: '8px 16px',
  marginBottom: '16px',
};

const getCompanyLinkStyle = (isHovered) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: SIZE_SUBHEADING,
  fontWeight: 700,
  color: isHovered ? COLOR_PRIMARY_DARK : COLOR_PRIMARY,
  textDecoration: 'none',
  transition: `color ${TRANSITION_DEFAULT}`,
});

const companyMetaStyle = {
  fontSize: SIZE_BODY,
  color: COLOR_TEXT_SECONDARY,
  textAlign: 'right',
};

const rolesListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '18px',
  paddingBottom: '18px',
  borderBottom: `1px solid ${COLOR_BORDER}`,
};

const roleRowStyle = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) auto',
  alignItems: 'baseline',
  gap: '12px',
};

const roleTitleStyle = {
  fontSize: SIZE_BODY_LG,
  fontWeight: 600,
  color: COLOR_TEXT_DARK,
  margin: 0,
};

const roleDateStyle = {
  fontSize: SIZE_BODY,
  color: COLOR_TEXT_SECONDARY,
  whiteSpace: 'nowrap',
};

const bulletListStyle = {
  margin: 0,
  paddingLeft: '22px',
  color: COLOR_TEXT,
  fontSize: SIZE_BODY_LG,
  lineHeight: 1.65,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const techGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '40px 20px',
};

const techGroupStyle = {
  minWidth: 0,
};

const techGroupLabelStyle = {
  fontSize: SIZE_BODY,
  fontWeight: 600,
  color: COLOR_TEXT_SECONDARY,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  marginBottom: '10px',
};

const chipRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
};

const chipStyle = {
  padding: '6px 14px',
  borderRadius: BORDER_RADIUS,
  backgroundColor: COLOR_PRIMARY_MID,
  color: COLOR_PRIMARY_DARK,
  fontSize: SIZE_BODY,
  fontWeight: 500,
  lineHeight: 1.35,
};

const techNoteStyle = {
  margin: '24px 0 0',
  fontSize: SIZE_BODY,
  color: COLOR_TEXT_SECONDARY,
  lineHeight: 1.55,
};

const ROLES = [
  { title: 'Software Engineer · Part-time', dates: 'Oct 2025 - Oct 2026' },
  { title: 'Software Engineer Intern', dates: 'Jun 2025 - Sep 2025' },
];

const RESPONSIBILITIES = [
  'Taking features from planning through to delivery, breaking work down, building across the stack, and coordinating with the team.',
  'Designing and shipping product features in Kotlin, Spring Boot, and React, with attention to code quality.',
  'Working with AWS and integrating external APIs, including Google My Business, Google Places, and internal business systems.',
  'Helping the team day to day by unblocking issues, sharing knowledge, and keeping the workflow moving.',
];

const TECH_GROUPS = [
  { label: 'Languages', items: ['Kotlin', 'Java', 'Python', 'TypeScript'] },
  { label: 'Frameworks', items: ['React', 'Spring Boot', 'Node.js'] },
  { label: 'DevOps & Cloud', items: ['Git', 'Jenkins', 'Spinnaker', 'AWS'] },
  { label: 'Databases', items: ['PostgreSQL', 'DynamoDB'] },
];

const About = () => {
  const [isWide, setIsWide] = useState(window.innerWidth >= BREAKPOINT_MOBILE);
  const [companyHovered, setCompanyHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth >= BREAKPOINT_MOBILE);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const panelLayoutStyle = {
    ...panelStyle,
    gridTemplateColumns: isWide ? '1.1fr 0.9fr' : '1fr',
  };

  const techColumnStyle = isWide
    ? { borderLeft: `1px solid ${COLOR_BORDER}`, paddingLeft: '28px' }
    : { borderTop: `1px solid ${COLOR_BORDER}`, paddingTop: '24px' };

  const techGroupsLayoutStyle = isWide
    ? techGridStyle
    : { ...techGridStyle, gridTemplateColumns: '1fr' };

  return (
    <div style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <h2 style={sectionTitleStyle}>About me</h2>
      </div>

      <div style={introBlockStyle}>
        <p style={introParagraphStyle}>
          I am a software engineer from Cracow, finishing my
          Master&apos;s in Computer Science at AGH. I&apos;m drawn to web development - building
          interfaces and the systems behind them - and I&apos;m still discovering how much there
          is to learn in this field.
        </p>
        <p style={{ ...introParagraphStyle, marginBottom: 0 }}>
          Outside of work, I enjoy running, training at the gym, and playing chess - movement when I need to
          switch off, and a slow game when I want to think without a screen. It keeps me balanced
          between code and lectures.
        </p>
      </div>

      <div style={panelLayoutStyle}>
        <section>
          <h3 style={blockTitleStyle}>Experience</h3>

          <div style={companyHeaderStyle}>
            <a
              href={QUALTRICS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={getCompanyLinkStyle(companyHovered)}
              onMouseEnter={() => setCompanyHovered(true)}
              onMouseLeave={() => setCompanyHovered(false)}
              aria-label="Qualtrics website"
            >
              Qualtrics
              <ExternalLink size={18} />
            </a>
            <span style={companyMetaStyle}>Cracow · Full-stack</span>
          </div>

          <div style={rolesListStyle}>
            {ROLES.map(({ title, dates }) => (
              <div key={title} style={roleRowStyle}>
                <h4 style={roleTitleStyle}>{title}</h4>
                <span style={roleDateStyle}>{dates}</span>
              </div>
            ))}
          </div>

          <ul style={bulletListStyle}>
            {RESPONSIBILITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={techColumnStyle}>
          <h3 style={blockTitleStyle}>Technologies</h3>

          <div style={techGroupsLayoutStyle}>
            {TECH_GROUPS.map(({ label, items }) => (
              <div key={label} style={techGroupStyle}>
                <div style={techGroupLabelStyle}>{label}</div>
                <div style={chipRowStyle}>
                  {items.map((item) => (
                    <span key={item} style={chipStyle}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={techNoteStyle}>
            I always stay open to new technologies.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

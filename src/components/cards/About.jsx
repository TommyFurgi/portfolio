import React, { useEffect, useState } from 'react';
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
  alignItems: 'baseline',
  gap: '8px 16px',
  marginBottom: '16px',
};

const companyLinkStyle = {
  fontSize: SIZE_SUBHEADING,
  fontWeight: 700,
  color: COLOR_PRIMARY,
  textDecoration: 'none',
};

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

const ROLES = [
  { title: 'Software Engineer · Part-time', dates: 'Oct 2025 - Present' },
  { title: 'Software Engineer Intern', dates: 'Jun 2025 - Sep 2025' },
];

const RESPONSIBILITIES = [
  'Take product work end-to-end: Kotlin/Spring Boot services on the backend, React on the frontend',
  'Extend what is already in production: new endpoints, UI flows, and database updates where the feature needs them',
  'Work day-to-day with the team: reviews, fixing follow-ups, and shipping through Jenkins and Spinnaker',
];

const TECH_GROUPS = [
  { label: 'Languages', items: ['Kotlin', 'Java', 'Python', 'TypeScript'] },
  { label: 'Frameworks', items: ['React', 'Spring Boot', 'Node.js'] },
  { label: 'DevOps & Cloud', items: ['Git', 'Jenkins', 'Spinnaker', 'AWS'] },
  { label: 'Databases', items: ['PostgreSQL', 'DynamoDB'] },
];

const About = () => {
  const [isWide, setIsWide] = useState(window.innerWidth >= BREAKPOINT_MOBILE);

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
          I am a software engineer from Cracow, working at Qaltrics while finishing my
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
              style={companyLinkStyle}
            >
              Qaltrics
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
        </section>
      </div>
    </div>
  );
};

export default About;

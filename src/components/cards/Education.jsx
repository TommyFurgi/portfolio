import React, { useEffect, useState } from 'react';
import {
  BORDER_RADIUS_LG,
  BREAKPOINT_MOBILE,
  COLOR_BORDER,
  COLOR_PRIMARY,
  COLOR_TEXT,
  COLOR_TEXT_DARK,
  COLOR_TEXT_SECONDARY,
  COLOR_WHITE,
  FONT_BODY,
  SHADOW_MD,
  SIZE_BODY,
  SIZE_BODY_LG,
  SIZE_SUBHEADING,
} from '../config/Constants';
import { sectionHeaderStyle, sectionTitleStyle } from '../config/sharedStyles';

const sectionStyle = {
  textAlign: 'left',
};

const panelStyle = {
  backgroundColor: COLOR_WHITE,
  borderRadius: BORDER_RADIUS_LG,
  border: `1px solid ${COLOR_BORDER}`,
  boxShadow: SHADOW_MD,
  padding: '24px 28px',
};

const schoolHeaderStyle = {
  marginBottom: '20px',
  paddingBottom: '16px',
  borderBottom: `1px solid ${COLOR_BORDER}`,
};

const schoolNameStyle = {
  fontSize: SIZE_SUBHEADING,
  fontWeight: 700,
  color: COLOR_TEXT_DARK,
  margin: '0 0 4px',
  fontFamily: FONT_BODY,
};

const schoolMetaStyle = {
  fontSize: SIZE_BODY,
  color: COLOR_TEXT_SECONDARY,
  margin: 0,
};

const columnsStyle = {
  display: 'grid',
  gap: '24px',
};

const blockTitleStyle = {
  fontSize: SIZE_BODY,
  fontWeight: 700,
  color: COLOR_PRIMARY,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '0 0 10px',
  fontFamily: FONT_BODY,
};

const degreeHeaderStyle = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) auto',
  alignItems: 'baseline',
  gap: '10px',
  marginBottom: '8px',
};

const degreeTitleStyle = {
  fontSize: SIZE_BODY_LG,
  fontWeight: 600,
  color: COLOR_TEXT_DARK,
  margin: 0,
};

const dateStyle = {
  fontSize: SIZE_BODY,
  color: COLOR_TEXT_SECONDARY,
  whiteSpace: 'nowrap',
};

const paragraphStyle = {
  fontSize: SIZE_BODY_LG,
  color: COLOR_TEXT,
  margin: 0,
  lineHeight: 1.65,
};

const thesisStyle = {
  fontSize: SIZE_BODY_LG,
  color: COLOR_TEXT,
  margin: '12px 0 0',
  lineHeight: 1.6,
};

const thesisTitleStyle = {
  fontStyle: 'italic',
};

const footerStyle = {
  marginTop: '20px',
  paddingTop: '14px',
  borderTop: `1px solid ${COLOR_BORDER}`,
  fontSize: SIZE_BODY_LG,
  color: COLOR_TEXT,
  lineHeight: 1.65,
};

const footerLabelStyle = {
  fontWeight: 600,
  color: COLOR_TEXT_DARK,
};

const Education = () => {
  const [isWide, setIsWide] = useState(window.innerWidth >= BREAKPOINT_MOBILE);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth >= BREAKPOINT_MOBILE);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridStyle = {
    ...columnsStyle,
    gridTemplateColumns: isWide ? '1fr 1fr' : '1fr',
  };

  const leftColumnStyle = isWide
    ? { paddingRight: '24px', borderRight: `1px solid ${COLOR_BORDER}` }
    : { paddingBottom: '20px', borderBottom: `1px solid ${COLOR_BORDER}` };

  return (
    <div style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <h2 style={sectionTitleStyle}>Education</h2>
      </div>

      <div style={{ ...panelStyle, marginTop: '20px' }}>
        <div style={schoolHeaderStyle}>
          <h3 style={schoolNameStyle}>AGH University of Science and Technology</h3>
          <p style={schoolMetaStyle}>Faculty of Computer Science · Cracow, Poland</p>
        </div>

        <div style={gridStyle}>
          <section style={leftColumnStyle}>
            <h4 style={blockTitleStyle}>Master&apos;s</h4>
            <div style={degreeHeaderStyle}>
              <h5 style={degreeTitleStyle}>M.Sc. Computer Science</h5>
              <span style={dateStyle}>Mar 2026 - Present</span>
            </div>
            <p style={paragraphStyle}>
              Deepening my knowledge in numerical methods, computational intelligence, and
              advanced algorithms. Exploring high-performance computing and system simulation
              to tackle complex engineering and data-driven problems. Alongside the coursework,
              I am building a stronger DevOps foundation: CI/CD pipelines, cloud infrastructure,
              and the tooling that keeps software shipping reliably in practice.
            </p>
          </section>

          <section>
            <h4 style={blockTitleStyle}>Bachelor&apos;s</h4>
            <div style={degreeHeaderStyle}>
              <h5 style={degreeTitleStyle}>B.Sc. Computer Science</h5>
              <span style={dateStyle}>Oct 2022 - Jan 2026</span>
            </div>
            <p style={paragraphStyle}>
              Completed a curriculum focused on software development, distributed systems,
              and systems engineering. Built a solid foundation in concurrency, data structures,
              and modern web architectures, both in theory and in practice.
            </p>
            <p style={thesisStyle}>
              <strong>Thesis name:</strong>{' '}
              <span style={thesisTitleStyle}>
                A software tool to visualise relationships between users based on offline data
                coming from selected social networks.
              </span>
            </p>
          </section>
        </div>

        <div style={footerStyle}>
          <span style={footerLabelStyle}>English (B2)</span>
          {': '}
          Comfortable working in English day to day, from team communication and code reviews
          to documentation and technical writing in an international environment.
        </div>
      </div>
    </div>
  );
};

export default Education;

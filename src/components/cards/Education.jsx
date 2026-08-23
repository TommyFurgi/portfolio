import React from 'react';
import {
  BORDER_RADIUS,
  COLOR_BORDER,
  COLOR_TEXT,
  COLOR_TEXT_MUTED,
  COLOR_WHITE,
  SIZE_BODY,
  SIZE_EXTERNAL_LINK,
  SIZE_SUBHEADING,
  SHADOW_MD,
} from '../config/Constants';
import { sectionHeaderStyle, sectionTitleStyle } from '../config/sharedStyles';

const sectionStyle = {
  textAlign: 'left',
};

const itemStyle = {
  background: COLOR_WHITE,
  padding: '24px',
  borderRadius: BORDER_RADIUS,
  border: `1px solid ${COLOR_BORDER}`,
  boxShadow: SHADOW_MD,
  margin: '15px 0',
};

const detailsStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const degreeDatesStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const institutionStyle = {
  fontSize: SIZE_EXTERNAL_LINK,
};

const facultyStyle = {
  fontSize: SIZE_SUBHEADING,
  marginTop: '5px',
  marginBottom: '5px',
};

const degreeStyle = {
  fontSize: SIZE_BODY,
  margin: '10px 0 5px',
};

const paragraphStyle = {
  fontSize: SIZE_BODY,
  color: COLOR_TEXT,
  margin: '5px 0',
  textAlign: 'justify',
};

const dateStyle = {
  fontSize: SIZE_BODY,
  color: COLOR_TEXT_MUTED,
  textAlign: 'right',
};

const separatorStyle = {
  height: '1px',
  backgroundColor: COLOR_BORDER,
  margin: '10px 0',
};

const Education = () => {
  return (
    <div id="education" style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <h2 style={sectionTitleStyle}>Education</h2>
      </div>

      <div style={itemStyle}>
        <div style={detailsStyle}>
          <h3 style={institutionStyle}>AGH University of Science and Technology</h3>
          <h4 style={facultyStyle}>Faculty of Computer Science</h4>
          <p style={paragraphStyle}><strong>Cracow, Poland</strong></p>

          <div style={degreeDatesStyle}>
            <h5 style={degreeStyle}>Master of Computer Science</h5>
            <p style={dateStyle}><strong>Mar 2026 - Present</strong></p>
          </div>

          <p style={paragraphStyle}>
            Advancing expertise in computer science with a focus on numerical methods,
            computational intelligence, and advanced mathematical modeling. Exploring
            high-performance computing and complex algorithmic optimizations to solve
            intricate engineering and data-driven problems.
          </p>

          <div style={separatorStyle} />

          <div style={degreeDatesStyle}>
            <h5 style={degreeStyle}>Bachelor of Computer Science</h5>
            <p style={dateStyle}><strong>Oct 2022 - Jan 2026</strong></p>
          </div>

          <p style={paragraphStyle}>
            Successfully completed a rigorous curriculum focused on software development,
            distributed systems, and systems engineering. Acquired a solid foundation in
            concurrency, data structures, and modern web architectures. Graduated with
            the highest possible grade (5.0), reflecting strong analytical skills and
            technical excellence.
          </p>
        </div>
      </div>

      <div style={itemStyle}>
        <div style={detailsStyle}>
          <h3 style={institutionStyle}>Language Proficiency</h3>
          <h4 style={facultyStyle}>English (B2 Level)</h4>

          <p style={paragraphStyle}>
            Strong command of professional English, enabling seamless collaboration in
            international environments. I am fully capable of communicating complex
            technical concepts effectively and efficiently utilizing English-language
            documentation, technical resources, and industry-standard tools to solve
            engineering challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;

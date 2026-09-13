import React, { useState } from 'react';
import {
  BORDER_RADIUS,
  BORDER_RADIUS_LG,
  COLOR_BORDER,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_MID,
  COLOR_TEXT,
  COLOR_TEXT_DARK,
  COLOR_WHITE,
  FONT_BODY,
  SHADOW_MD,
  SIZE_BODY,
  SIZE_BODY_LG,
  TRANSITION_DEFAULT,
} from '../config/Constants';
import { getProjectImage } from '../../assets/projectImages';

const cardStyle = {
  backgroundColor: COLOR_WHITE,
  borderRadius: BORDER_RADIUS_LG,
  border: `1px solid ${COLOR_BORDER}`,
  boxShadow: SHADOW_MD,
  overflow: 'hidden',
  cursor: 'pointer',
  textAlign: 'left',
  padding: 0,
  width: '100%',
  fontFamily: FONT_BODY,
  display: 'flex',
  flexDirection: 'column',
  transition: `border-color ${TRANSITION_DEFAULT}, box-shadow ${TRANSITION_DEFAULT}`,
};

const imageWrapStyle = {
  width: '100%',
  aspectRatio: '16 / 10',
  overflow: 'hidden',
  backgroundColor: COLOR_PRIMARY_MID,
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const bodyStyle = {
  padding: '18px 20px 20px',
};

const titleStyle = {
  margin: '0 0 10px',
  fontSize: SIZE_BODY_LG,
  fontWeight: 700,
  color: COLOR_TEXT_DARK,
};

const chipRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  marginBottom: '10px',
};

const chipStyle = {
  padding: '4px 10px',
  borderRadius: BORDER_RADIUS,
  backgroundColor: COLOR_PRIMARY_MID,
  color: COLOR_PRIMARY_DARK,
  fontSize: SIZE_BODY,
  fontWeight: 500,
};

const summaryStyle = {
  margin: 0,
  fontSize: SIZE_BODY,
  color: COLOR_TEXT,
  lineHeight: 1.55,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

const ProjectCard = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      style={{
        ...cardStyle,
        borderColor: isHovered ? COLOR_PRIMARY : COLOR_BORDER,
        boxShadow: isHovered ? '0 8px 24px rgba(14, 160, 111, 0.12)' : SHADOW_MD,
      }}
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageWrapStyle}>
        <img
          src={getProjectImage(project.heroImage)}
          alt={project.title}
          style={imageStyle}
        />
      </div>
      <div style={bodyStyle}>
        <h3 style={titleStyle}>{project.title}</h3>
        <div style={chipRowStyle}>
          {project.tech.map((item) => (
            <span key={item} style={chipStyle}>{item}</span>
          ))}
        </div>
        <p style={summaryStyle}>{project.summary}</p>
      </div>
    </button>
  );
};

export default ProjectCard;

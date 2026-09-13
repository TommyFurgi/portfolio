import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ExternalLink from '../../assets/icons/ExternalLink';
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
  SIZE_SUBHEADING,
  TRANSITION_DEFAULT,
} from '../config/Constants';
import { getProjectImage } from '../../assets/projectImages';

const panelStyle = {
  backgroundColor: COLOR_WHITE,
  borderRadius: BORDER_RADIUS_LG,
  border: `1px solid ${COLOR_BORDER}`,
  boxShadow: SHADOW_MD,
  overflow: 'hidden',
  textAlign: 'left',
  marginTop: '20px',
};

const backButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  marginTop: '20px',
  padding: 0,
  border: 'none',
  background: 'none',
  color: COLOR_PRIMARY,
  fontSize: SIZE_BODY,
  fontWeight: 600,
  cursor: 'pointer',
  fontFamily: FONT_BODY,
};

const contentStyle = {
  padding: '24px 28px 28px',
};

const titleStyle = {
  margin: '0 0 12px',
  fontSize: SIZE_SUBHEADING,
  fontWeight: 700,
  color: COLOR_TEXT_DARK,
  fontFamily: FONT_BODY,
};

const chipRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '16px',
};

const chipStyle = {
  padding: '6px 12px',
  borderRadius: BORDER_RADIUS,
  backgroundColor: COLOR_PRIMARY_MID,
  color: COLOR_PRIMARY_DARK,
  fontSize: SIZE_BODY,
  fontWeight: 500,
};

const descriptionStyle = {
  margin: '0 0 20px',
  fontSize: SIZE_BODY_LG,
  color: COLOR_TEXT,
  lineHeight: 1.65,
};

const githubButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: COLOR_PRIMARY,
  color: COLOR_WHITE,
  padding: '10px 18px',
  border: 'none',
  borderRadius: BORDER_RADIUS,
  cursor: 'pointer',
  fontSize: SIZE_BODY,
  fontWeight: 600,
  fontFamily: FONT_BODY,
  transition: `background-color ${TRANSITION_DEFAULT}`,
};

const galleryTitleStyle = {
  margin: '28px 0 12px',
  fontSize: SIZE_BODY,
  fontWeight: 700,
  color: COLOR_PRIMARY,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const swiperImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: BORDER_RADIUS,
  display: 'block',
};

const ProjectDetails = ({ project, onBack }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button type="button" style={backButtonStyle} onClick={onBack}>
        ← All projects
      </button>

      <div style={panelStyle}>
        <div style={contentStyle}>
          <h2 style={titleStyle}>{project.title}</h2>

          <div style={chipRowStyle}>
            {project.tech.map((item) => (
              <span key={item} style={chipStyle}>{item}</span>
            ))}
          </div>

          <p style={descriptionStyle}>{project.description}</p>

          <button
            type="button"
            onClick={() => window.open(project.codeLink, '_blank')}
            style={{
              ...githubButtonStyle,
              backgroundColor: isHovered ? COLOR_PRIMARY_DARK : COLOR_PRIMARY,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View on GitHub
            <ExternalLink size={16} />
          </button>

          {project.images?.length > 0 && (
            <>
              <h3 style={galleryTitleStyle}>Screenshots</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
              >
                {project.images.map((image) => (
                  <SwiperSlide key={image}>
                    <img
                      src={getProjectImage(image)}
                      alt={`${project.title} screenshot`}
                      style={swiperImageStyle}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

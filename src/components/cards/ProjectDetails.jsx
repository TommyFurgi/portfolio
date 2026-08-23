import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {
  BORDER_RADIUS,
  BREAKPOINT_PROJECTS_MOBILE,
  COLOR_HEADING,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_SECTION_MUTED,
  COLOR_TEXT,
  COLOR_WHITE,
  SIZE_BODY,
  SIZE_EXTERNAL_LINK,
} from '../config/Constants';

const sectionStyle = {
  width: '100%',
  display: 'block',
  textAlign: 'center',
  padding: '24px',
  backgroundColor: COLOR_SECTION_MUTED,
};

const titleStyle = {
  marginBottom: '10px',
  fontSize: SIZE_EXTERNAL_LINK,
  color: COLOR_HEADING,
};

const textStyle = {
  fontSize: SIZE_BODY,
  color: COLOR_TEXT,
  marginBottom: '15px',
  textAlign: 'justify',
  textJustify: 'inter-word',
};

const githubButtonStyle = {
  backgroundColor: COLOR_PRIMARY,
  color: COLOR_WHITE,
  padding: '10px 20px',
  border: 'none',
  borderRadius: BORDER_RADIUS,
  cursor: 'pointer',
  fontSize: SIZE_BODY,
  transition: 'all 0.3s ease',
};

const swiperStyle = {
  marginTop: '20px',
  width: '100%',
  maxWidth: '900px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: BORDER_RADIUS,
  userSelect: 'none',
  pointerEvents: 'none',
};

const slideStyle = {
  userSelect: 'none',
};

const ProjectDetails = ({ project }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAKPOINT_PROJECTS_MOBILE);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= BREAKPOINT_PROJECTS_MOBILE);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getImagePath = (imageName) => {
    return require(`../../assets/images/projects/${imageName}`);
  };

  if (!project) return null;

  const buttonWrapperStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'flex-end',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>{project.title}</h2>
      <p style={textStyle}>{project.description}</p>

      <div style={buttonWrapperStyle}>
        <button
          type="button"
          onClick={() => window.open(project.codeLink, '_blank')}
          style={{
            ...githubButtonStyle,
            backgroundColor: isHovered ? COLOR_PRIMARY_DARK : COLOR_PRIMARY,
            marginRight: isMobile ? 0 : '40px',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          View Project on GitHub
        </button>
      </div>

      <Swiper
        style={swiperStyle}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        {project.images?.map((image, index) => (
          <SwiperSlide key={index} style={slideStyle}>
            <img
              src={getImagePath(image)}
              alt={`${project.title} screenshot ${index + 1}`}
              style={imageStyle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectDetails;

import React, { useState, useEffect } from 'react';
import {
  BORDER_RADIUS,
  BREAKPOINT_PROJECTS_MOBILE,
  COLOR_EXTERNAL_LINK,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_WHITE,
  SIZE_BODY,
  SHADOW_MD,
  TRANSITION_DEFAULT,
} from '../config/Constants';

const navItemBaseStyle = {
  flex: 1,
  height: '80%',
  color: COLOR_WHITE,
  padding: '10px 0',
  border: 'none',
  cursor: 'pointer',
  transition: `all ${TRANSITION_DEFAULT}`,
  textAlign: 'center',
  fontSize: SIZE_BODY,
  borderRight: `1px solid ${COLOR_PRIMARY}`,
  position: 'relative',
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const navItemActiveStyle = {
  backgroundColor: COLOR_PRIMARY,
  zIndex: 1,
  height: '100%',
  borderRight: 'none',
  borderRadius: `${BORDER_RADIUS} ${BORDER_RADIUS} 0 0`,
  boxShadow: '1px -4px 20px rgba(0, 0, 0, 0.2)',
  transform: 'scale(1.02)',
};

const navItemMobileStyle = {
  width: '100%',
  marginBottom: '10px',
  borderRadius: BORDER_RADIUS,
  boxShadow: SHADOW_MD,
  padding: '12px 0',
  height: 'auto',
  borderRight: 'none',
};

const navItemMobileActiveStyle = {
  boxShadow: 'none',
  transform: 'none',
  borderRadius: BORDER_RADIUS,
  padding: '12px 0',
};

const ProjectNavbar = ({ projects, selectedProject, setSelectedProject }) => {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAKPOINT_PROJECTS_MOBILE);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= BREAKPOINT_PROJECTS_MOBILE);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navbarStyle = {
    height: isMobile ? 'auto' : '60px',
    width: '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'stretch',
    borderRadius: BORDER_RADIUS,
    position: 'relative',
    overflow: isMobile ? 'visible' : 'hidden',
  };

  const getItemStyle = (project) => {
    const isActive = selectedProject === project;
    const isHovered = hoveredNavItem === project;

    return {
      ...navItemBaseStyle,
      backgroundColor: isActive
        ? COLOR_PRIMARY
        : isHovered
          ? COLOR_PRIMARY_DARK
          : COLOR_EXTERNAL_LINK,
      ...(isActive ? navItemActiveStyle : {}),
      ...(isMobile ? navItemMobileStyle : {}),
      ...(isMobile && isActive ? navItemMobileActiveStyle : {}),
    };
  };

  return (
    <div style={navbarStyle}>
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          onClick={() => setSelectedProject(project)}
          onMouseEnter={() => setHoveredNavItem(project)}
          onMouseLeave={() => setHoveredNavItem(null)}
          style={getItemStyle(project)}
        >
          {project.title}
        </button>
      ))}
    </div>
  );
};

export default ProjectNavbar;

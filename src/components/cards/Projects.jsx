import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projectsData from '../../assets/projects.json';
import ProjectNavbar from './ProjectNavbar';
import ProjectDetails from './ProjectDetails';
import {
  BORDER_RADIUS_LG,
  COLOR_BORDER,
  COLOR_WHITE,
  SHADOW_MD,
} from '../config/Constants';

const containerStyle = {
  width: '100%',
};

const panelStyle = {
  backgroundColor: COLOR_WHITE,
  borderRadius: BORDER_RADIUS_LG,
  border: `1px solid ${COLOR_BORDER}`,
  boxShadow: SHADOW_MD,
  overflow: 'hidden',
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectsData.projects);
    if (projectsData.projects.length > 0) {
      setSelectedProject(projectsData.projects[0]);
    }
  }, []);

  return (
    <div id="projects" style={containerStyle}>
      <div style={panelStyle}>
        <ProjectNavbar
          projects={projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />

        {selectedProject && (
          <ProjectDetails project={selectedProject} />
        )}
      </div>
    </div>
  );
};

export default Projects;

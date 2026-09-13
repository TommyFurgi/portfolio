import React, { useEffect, useState } from 'react';
import projectsData from '../../assets/projects.json';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import { BREAKPOINT_MOBILE } from '../config/Constants';
import { sectionHeaderStyle, sectionTitleStyle } from '../config/sharedStyles';

const sectionStyle = {
  textAlign: 'left',
};

const gridStyle = {
  display: 'grid',
  gap: '20px',
  marginTop: '20px',
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isWide, setIsWide] = useState(window.innerWidth >= BREAKPOINT_MOBILE);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth >= BREAKPOINT_MOBILE);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridLayoutStyle = {
    ...gridStyle,
    gridTemplateColumns: isWide ? '1fr 1fr' : '1fr',
  };

  return (
    <div style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <h2 style={sectionTitleStyle}>Projects</h2>
      </div>

      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <div style={gridLayoutStyle}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;

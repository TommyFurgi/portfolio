import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projectsData from '../assets/projects.json'; 
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectsData.projects);
    if (projectsData.projects.length > 0) {
      setSelectedProject(projectsData.projects[0].id);
    }
  }, []);

  return (
    <div name="portfolio" className="portfolio-container">
      <div className="portfolio-content">
        <div className="portfolio-navbar">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`portfolio-nav-item ${selectedProject === project.id ? 'active' : ''}`}
              onClick={() => setSelectedProject(project.id)}
            >
              {project.title}
            </button>
          ))}
        </div>

        <div className="project-description">
          {projects.map((project) => (
            selectedProject === project.id && (
              <div key={project.id} className="portfolio-project">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-button">
                  <button
                    onClick={() => window.open(project.codeLink, "_blank", "noopener noreferrer")}
                    className="github-button"
                  >
                    View Code on GitHub
                  </button>
                </div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

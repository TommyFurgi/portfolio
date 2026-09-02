import React from 'react';
import Home from './cards/Home';
import About from './cards/About';
import Education from './cards/Education';
import Projects from './cards/Projects';
import Contact from './cards/Contact';
import SectionWrapper from './SectionWrapper';
import { SECTION_TONE } from './config/Constants';

const MainContent = () => {
  return (
    <>
      <Home />
      <SectionWrapper id="about me" tone={SECTION_TONE.MUTED}>
        <About />
      </SectionWrapper>
      <SectionWrapper id="education" tone={SECTION_TONE.MUTED}>
        <Education />
      </SectionWrapper>
      <SectionWrapper id="projects" tone={SECTION_TONE.MUTED}>
        <Projects />
      </SectionWrapper>
      <SectionWrapper id="contact" tone={SECTION_TONE.MUTED}>
        <Contact />
      </SectionWrapper>
    </>
  );
};

export default MainContent;

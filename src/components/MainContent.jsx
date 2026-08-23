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
      <SectionWrapper tone={SECTION_TONE.MUTED}>
        <About />
      </SectionWrapper>
      <SectionWrapper tone={SECTION_TONE.WHITE}>
        <Education />
      </SectionWrapper>
      <SectionWrapper tone={SECTION_TONE.MUTED}>
        <Projects />
      </SectionWrapper>
      <SectionWrapper tone={SECTION_TONE.WHITE}>
        <Contact />
      </SectionWrapper>
    </>
  );
};

export default MainContent;

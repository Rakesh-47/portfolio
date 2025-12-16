import React from 'react';
import ScrollSections from '../components/ScrollSections';
import FullScreenSection from '../components/FullScreenSection';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import CompetitiveProgramming from '../components/CompetitiveProgramming';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      {/* Fixed navbar on top */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <Navbar />
      </div>

      <ScrollSections>
        {/* Section 1: Hero */}
        <FullScreenSection variant={0}>
          <Hero />
        </FullScreenSection>

        {/* Section 2: About */}
        <FullScreenSection variant={1}>
          <About />
        </FullScreenSection>

        {/* Section 3: Experience */}
        <FullScreenSection variant={2}>
          <Experience />
        </FullScreenSection>

        {/* Section 4: Projects */}
        <FullScreenSection variant={3}>
          <Projects />
        </FullScreenSection>

        {/* Section 5: Skills */}
        <FullScreenSection variant={4}>
          <Skills />
        </FullScreenSection>

        {/* Section 6: Competitive Programming */}
        <FullScreenSection variant={5}>
          <CompetitiveProgramming />
        </FullScreenSection>

        {/* Section 7: Achievements */}
        <FullScreenSection variant={6}>
          <Achievements />
        </FullScreenSection>

        {/* Section 8: Contact */}
        <FullScreenSection variant={7}>
          <Contact />
        </FullScreenSection>
      </ScrollSections>
    </>
  );
};

export default Home;

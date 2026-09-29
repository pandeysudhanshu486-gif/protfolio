import React from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Experience from '../components/experience/Experience';
import Achievements from '../components/achievements/Achievements';
import Education from '../components/education/Education';
import CodingProfiles from '../components/coding/CodingProfiles';
import Research from '../components/research/Research';
import Contact from '../components/contact/Contact';

const Home = ({ currentView = 'home', onNavigate, onSelectProject }) => {
  switch (currentView) {
    case 'about':
      return <About onNavigate={onNavigate} />;
    case 'skills':
      return <Skills onNavigate={onNavigate} />;
    case 'projects':
      return <Projects onSelectProject={onSelectProject} onNavigate={onNavigate} />;
    case 'experience':
      return <Experience onNavigate={onNavigate} />;
    case 'achievements':
      return <Achievements onNavigate={onNavigate} />;
    case 'education':
      return <Education onNavigate={onNavigate} />;
    case 'coding':
      return <CodingProfiles onNavigate={onNavigate} />;
    case 'research':
      return <Research onNavigate={onNavigate} />;
    case 'contact':
      return <Contact onNavigate={onNavigate} />;
    case 'home':
    default:
      return <Hero onNavigate={onNavigate} />;
  }
};

export default Home;

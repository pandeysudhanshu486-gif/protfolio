import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ArchitectureDiagram from './ArchitectureDiagram';
import { FolderGit2, Cpu, Sparkles } from 'lucide-react';

const Projects = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'AI', 'Web', 'Full Stack', 'Healthcare', 'Environmental', 'Automation'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p =>
        p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        p.name.toLowerCase().includes(activeCategory.toLowerCase())
      );

  const handleOpenDetails = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="projects" className="os-section" style={{ borderBottom: 'none' }}>
      {/* Section Header */}
      <div className="os-section-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem' }}>
        <h2>
          <FolderGit2 size={22} color="var(--accent-cyan)" /> Project Lab
        </h2>
        <p>Real projects. Real problems. Practical solutions.</p>
      </div>

      {/* Pill Filter Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`os-pill-filter ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects 3-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={handleOpenDetails}
          />
        ))}
      </div>

      {/* Standout Embedded Interactive System Architecture Blueprint */}
      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Cpu size={20} color="var(--accent-cyan)" />
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>
            Featured Architecture Blueprint (AI Interview Agent)
          </h3>
        </div>
        <ArchitectureDiagram project={projectsData[0]} />
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;

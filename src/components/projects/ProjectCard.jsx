import React from 'react';
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react';

const ProjectCard = ({ project, onOpenDetails }) => {
  return (
    <div
      className="os-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1.25rem',
        backgroundColor: 'var(--bg-card)'
      }}
    >
      {/* Project Visual Thumbnail / Cyber Banner */}
      <div
        style={{
          height: '135px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: '#0c1322',
          border: '1px solid rgba(56, 189, 248, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '42px', height: '42px', margin: '0 auto 0.5rem auto', borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(56, 189, 248, 0.4)' }}>
            <Layers size={20} color="var(--accent-cyan)" />
          </div>
          <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#93c5fd', fontWeight: '600' }}>
            {project.name}
          </span>
        </div>
      </div>

      {/* Project Name & Category Tag */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0 }}>
          {project.name}
        </h3>
      </div>

      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '0.65rem' }}>
        {project.category}
      </span>

      {/* Tagline / Description */}
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.5', flex: 1 }}>
        {project.tagline}
      </p>

      {/* Tech Stack Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
        {project.techStack.slice(0, 4).map((tech, idx) => (
          <span
            key={idx}
            style={{
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions: Live Demo + GitHub */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.75rem' }}>
        {project.liveDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-os-primary"
            style={{ padding: '0.4rem 0.6rem', fontSize: '0.78rem', justifyContent: 'center' }}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        ) : (
          <button className="btn-os-secondary" disabled style={{ padding: '0.4rem 0.6rem', fontSize: '0.78rem', justifyContent: 'center' }}>
            Live Demo
          </button>
        )}

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-os-secondary"
            style={{ padding: '0.4rem 0.6rem', fontSize: '0.78rem', justifyContent: 'center' }}
          >
            <Github size={13} /> GitHub
          </a>
        ) : (
          <button className="btn-os-secondary" disabled style={{ padding: '0.4rem 0.6rem', fontSize: '0.78rem', justifyContent: 'center' }}>
            GitHub
          </button>
        )}
      </div>

      {/* View Case Study Button */}
      <button
        onClick={() => onOpenDetails(project)}
        className="btn-os-secondary"
        style={{
          width: '100%',
          justifyContent: 'center',
          padding: '0.45rem',
          fontSize: '0.8rem',
          color: 'var(--accent-cyan)',
          borderColor: 'rgba(56, 189, 248, 0.3)'
        }}
      >
        View Case Study <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default ProjectCard;

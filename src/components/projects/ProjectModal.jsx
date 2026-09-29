import React, { useState } from 'react';
import { X, ExternalLink, Github, ArrowLeft, Layers, CheckCircle2, Cpu } from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  if (!isOpen || !project) return null;

  const tabs = ['Overview', 'Architecture', 'Features', 'Challenges', 'My Contribution'];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 8, 17, 0.92)',
        backdropFilter: 'blur(16px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#0a0f1d',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '920px',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 0 40px rgba(37, 99, 235, 0.3)',
          padding: '2rem',
          position: 'relative',
          color: 'var(--text-primary)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-cyan)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.88rem',
              fontWeight: '600'
            }}
          >
            <ArrowLeft size={16} /> Back to Projects
          </button>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-os-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}>
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-os-secondary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}>
                <Github size={14} /> GitHub
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                borderRadius: 'var(--radius-full)',
                padding: '0.35rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Title & Tags */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {project.name}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="os-tag">{project.category}</span>
            <span className="os-tag">Full Stack</span>
            <span className="os-tag">Interactive Case Study</span>
          </div>
        </div>

        {/* Top Two Column Layout: Preview Mockup + Overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '1.75rem',
            marginBottom: '2rem'
          }}
          className="os-modal-top-grid"
        >
          {/* Left Preview Box */}
          <div
            style={{
              backgroundColor: '#070b16',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '200px',
              textAlign: 'center',
              background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.2) 0%, #070b16 80%)'
            }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
              <Layers size={24} color="var(--accent-cyan)" />
            </div>
            <h4 style={{ fontSize: '1rem', color: '#93c5fd', marginBottom: '0.25rem' }}>{project.name}</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Interactive Engineering Blueprint</span>
          </div>

          {/* Right Overview & Technologies */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Project Overview
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {project.tagline || project.solution}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Technologies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {project.techStack.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(37, 99, 235, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#93c5fd'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '0.75rem',
            marginBottom: '1.5rem',
            overflowX: 'auto'
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.84rem',
                fontWeight: activeTab === tab ? '700' : '500',
                color: activeTab === tab ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                backgroundColor: activeTab === tab ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                whiteSpace: 'nowrap'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        {activeTab === 'Overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="os-modal-tab-grid">
            <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
              <h4 style={{ color: 'var(--accent-rose)', fontSize: '0.95rem', marginBottom: '0.4rem' }}>Problem Statement</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{project.problem}</p>
            </div>

            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
              <h4 style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem', marginBottom: '0.4rem' }}>Engineered Solution</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{project.solution}</p>
            </div>
          </div>
        )}

        {activeTab === 'Architecture' && (
          <ArchitectureDiagram project={project} />
        )}

        {activeTab === 'Features' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }} className="os-modal-tab-grid">
            {project.keyFeatures.map((f, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Challenges' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.challenges && project.challenges.map((c, idx) => (
              <div key={idx} style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.25rem' }}>Issue: {c.issue}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--accent-emerald)' }}>✓ Resolution: {c.resolution}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'My Contribution' && (
          <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderLeft: '4px solid var(--accent-primary)' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '0.35rem' }}>MY PERSONAL CONTRIBUTION</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{project.personalContribution}</p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .os-modal-top-grid, .os-modal-tab-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;

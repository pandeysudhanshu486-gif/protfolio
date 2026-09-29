import React from 'react';
import { X, Zap, Download, Mail, ExternalLink, Github, CheckCircle2, Code2, Copy, Sparkles } from 'lucide-react';
import { personalData } from '../../data/personal';
import { projectsData } from '../../data/projects';

const RecruiterPitchModal = ({ isOpen, onClose, onCopyEmail }) => {
  if (!isOpen) return null;

  const topProjects = projectsData.slice(0, 2);

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
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        className="os-card"
        style={{
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0a0f1d',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 0 50px rgba(37, 99, 235, 0.35)',
          padding: '2rem',
          position: 'relative',
          color: 'var(--text-primary)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="var(--accent-amber)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>
                Recruiter Quick Pitch (30-Second Summary)
              </h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Targeted overview for hiring managers & technical recruiters
              </span>
            </div>
          </div>

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

        {/* Candidate Summary Banner */}
        <div
          style={{
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.2rem', color: '#93c5fd', margin: '0 0 0.2rem 0' }}>
              {personalData.name}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
              {personalData.degree} ({personalData.academicYear}) • {personalData.location}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
            <span style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: '700' }}>
              Open for Internships
            </span>
          </div>
        </div>

        {/* 3 Core Strengths Grid */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: '700' }}>
            Why Hire Sudhanshu? (Core Competencies)
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '0.35rem' }}>
                🧠 Problem Solving & DSA
              </span>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                300+ problems solved in C++ across LeetCode & CodeChef. Solid grasp of Graphs, Trees, and Dynamic Programming.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#818cf8', marginBottom: '0.35rem' }}>
                ⚡ Modern Full Stack
              </span>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                Proficient in React.js, Node.js, Express, REST APIs, and responsive design systems with clean component architecture.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--accent-emerald)', marginBottom: '0.35rem' }}>
                🤖 AI / LLM Engineering
              </span>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                Practical experience connecting LLM APIs, guardrails, and RAG pipelines to user-facing web interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Flagship Projects Quick Snapshot */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: '700' }}>
            Featured Flagship Projects
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {topProjects.map((p) => (
              <div
                key={p.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div>
                  <h5 style={{ fontSize: '0.92rem', color: 'var(--text-primary)', margin: '0 0 0.2rem 0' }}>
                    {p.name} <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>[{p.category}]</span>
                  </h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                    {p.tagline}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {p.liveDemo && (
                    <a href={p.liveDemo} target="_blank" rel="noopener noreferrer" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons: Direct Contact / Resume */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-os-primary"
              style={{ padding: '0.55rem 1.2rem', textDecoration: 'none' }}
            >
              <Download size={16} /> Download Resume (PDF)
            </a>

            <button
              onClick={() => onCopyEmail && onCopyEmail()}
              className="btn-os-secondary"
              style={{ padding: '0.55rem 1.2rem' }}
            >
              <Copy size={16} /> Copy Email
            </button>
          </div>

          <a
            href={personalData.socialLinks.email}
            className="btn-os-primary"
            style={{ padding: '0.55rem 1.2rem', textDecoration: 'none', backgroundColor: '#10b981', borderColor: '#10b981' }}
          >
            <Mail size={16} /> Schedule Interview / Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecruiterPitchModal;

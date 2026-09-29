import React from 'react';
import { X, Download, Mail, ExternalLink, Printer, FileText, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalData } from '../../data/personal';
import { skillsData } from '../../data/skills';
import { projectsData } from '../../data/projects';

const ResumeModal = ({ isOpen, onClose, onCopyEmail }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 8, 17, 0.94)',
        backdropFilter: 'blur(16px)',
        zIndex: 2600,
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
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          backgroundColor: '#0a0f1d',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 0 50px rgba(37, 99, 235, 0.4)',
          borderRadius: 'var(--radius-lg)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 1.5rem',
            backgroundColor: '#070b16',
            borderBottom: '1px solid var(--border-color)',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={20} color="var(--accent-cyan)" />
            <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
              Resume Preview — {personalData.name}.pdf
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-os-primary"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', textDecoration: 'none' }}
            >
              <Download size={14} /> Download PDF
            </a>

            <button
              onClick={() => window.print()}
              className="btn-os-secondary"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
            >
              <Printer size={14} /> Print
            </button>

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

        {/* Resume Content Sheet */}
        <div style={{ padding: '2.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', lineHeight: '1.5' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid rgba(56, 189, 248, 0.3)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '0.3rem', color: '#f1f5f9' }}>
              {personalData.name}
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '0.5rem' }}>
              {personalData.title}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <span>📍 {personalData.location}</span>
              <span>✉️ {personalData.email}</span>
              <a href={personalData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>LinkedIn</a>
              <a href={personalData.socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>GitHub</a>
              <a href={personalData.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>LeetCode</a>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Education
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <strong style={{ fontSize: '0.95rem' }}>{personalData.degree}</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{personalData.college || 'Engineering Department'}</p>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                2023 - 2027 (Expected)
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Technical Skills
            </h3>
            <div style={{ fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <p><strong>Languages:</strong> C++, Python, JavaScript (ES6+), SQL</p>
              <p><strong>Web Technologies:</strong> React.js, Node.js, Express.js, HTML5, CSS3, REST APIs</p>
              <p><strong>AI / Machine Learning:</strong> Prompt Engineering, LLM API Integration, RAG Fundamentals</p>
              <p><strong>Developer Tools:</strong> Git, GitHub, VS Code, Postman, Vercel</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Featured Engineering Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projectsData.slice(0, 3).map((p) => (
                <div key={p.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '0.92rem' }}>{p.name}</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{p.category}</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.2rem 0' }}>
                    • {p.tagline}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    Tech: {p.techStack.join(' | ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Achievements */}
          <div>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-cyan)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Achievements & Problem Solving
            </h3>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <p>• <strong>LeetCode:</strong> 300+ Problems Solved across DSA (Arrays, Graphs, Trees, Dynamic Programming).</p>
              <p>• <strong>Smart India Hackathon (SIH):</strong> Developed working AI prototype addressing national statements.</p>
              <p>• <strong>CodeChef:</strong> Regular contest participation and competitive problem solving.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

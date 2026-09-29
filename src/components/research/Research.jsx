import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Zap, CheckCircle2 } from 'lucide-react';

const Research = () => {
  const whatICanBuild = [
    'Business Websites',
    'React Applications',
    'AI-powered Applications',
    'AI Chatbots',
    'Automation Tools',
    'API Integrations'
  ];

  return (
    <section id="research" className="os-section" style={{ borderBottom: 'none' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}
        className="os-research-grid"
      >
        {/* Left Card: Research & Technical Work */}
        <div className="os-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
            <BookOpen size={20} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0 }}>
              Research & Technical Work
            </h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Research papers, technical blogs, AI experiments and notes.
          </p>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem',
              border: '1px dashed var(--border-color)',
              textAlign: 'center',
              marginTop: 'auto'
            }}
          >
            <span style={{ display: 'block', fontSize: '1rem', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '0.35rem' }}>
              Coming Soon
            </span>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Will be updated with research, blogs and technical writeups.
            </p>
          </div>
        </div>

        {/* Right Card: What I Can Build */}
        <div className="os-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
            <Zap size={20} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0 }}>
              What I Can Build
            </h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Web, AI, and automation solutions for your needs.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '1.5rem' }}>
            {whatICanBuild.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={14} color="var(--accent-emerald)" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600', margin: 0 }}>
                Have a project in mind?
              </p>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>Let's build it.</span>
            </div>
            <Link
              to="/contact"
              className="btn-os-primary"
              style={{ padding: '0.35rem 0.85rem', fontSize: '0.78rem', textDecoration: 'none' }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .os-research-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Research;

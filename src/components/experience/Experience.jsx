import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="os-section">
      <div className="os-section-header">
        <h2>
          <Briefcase size={22} color="var(--accent-cyan)" /> Experience
        </h2>
      </div>

      <div className="os-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Item 1: Student Developer */}
          <div style={{ borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1.25rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0 }}>
                Student Developer
              </h3>
              <span className="os-tag" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                Current
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Building practical software projects, participating in hackathons and improving development and problem-solving skills.
            </p>
          </div>

          {/* Item 2: Internships / Freelance */}
          <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
                Internships / Freelance / Open Source
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Coming Soon
              </span>
            </div>
          </div>

          {/* Item 3: Professional Experience */}
          <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
                Professional Experience
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

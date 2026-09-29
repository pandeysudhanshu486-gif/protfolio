import React from 'react';
import { GraduationCap, Calendar, Building, Sparkles } from 'lucide-react';
import { personalData } from '../../data/personal';

const About = () => {
  const focusedPills = [
    'Data Structures & Algorithms',
    'C++',
    'Web Development',
    'React',
    'Python',
    'Artificial Intelligence',
    'AI-powered applications',
    'APIs & Backend',
    'Competitive Programming'
  ];

  return (
    <section id="about" className="os-section">
      {/* Section Header */}
      <div className="os-section-header">
        <h2>
          <span className="code-bracket">&lt;/&gt;</span> About Me
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2rem',
          alignItems: 'start',
          marginBottom: '2rem'
        }}
        className="os-about-grid"
      >
        {/* Bio Paragraph */}
        <div>
          <p
            style={{
              fontSize: '0.98rem',
              lineHeight: '1.75',
              color: 'var(--text-secondary)',
              marginBottom: '1.25rem'
            }}
          >
            I am a Computer Science Engineering student interested in software development, artificial intelligence, problem solving and building practical applications. I enjoy learning through real-world projects, hackathons and competitive programming while continuously improving my development and problem-solving skills.
          </p>

          <p
            style={{
              fontSize: '0.92rem',
              lineHeight: '1.7',
              color: 'var(--text-secondary)'
            }}
          >
            Currently pursuing my degree at <strong>{personalData.college}</strong>, I focus on building scalable web software and integrating AI models into user-centric interfaces with maintainable architectures.
          </p>
        </div>

        {/* Right Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div className="os-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.2rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(37, 99, 235, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={20} color="var(--accent-cyan)" />
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>B.Tech</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Computer Science Engineering</span>
            </div>
          </div>

          <div className="os-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.2rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={20} color="#818cf8" />
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>2nd Year</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Current Academic Year</span>
            </div>
          </div>

          <div className="os-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.2rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building size={20} color="var(--accent-emerald)" />
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{personalData.college}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>College / University</span>
            </div>
          </div>
        </div>
      </div>

      {/* Currently Focused On Pills */}
      <div>
        <h4
          style={{
            fontSize: '0.9rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '0.85rem'
          }}
        >
          Currently focused on:
        </h4>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {focusedPills.map((pill, idx) => (
            <span
              key={idx}
              className="os-tag"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
                padding: '0.35rem 0.8rem'
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .os-about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;

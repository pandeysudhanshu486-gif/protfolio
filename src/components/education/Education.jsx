import React from 'react';
import { GraduationCap } from 'lucide-react';
import { personalData } from '../../data/personal';

const Education = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Object Oriented Programming',
    'Software Engineering'
  ];

  return (
    <section id="education" className="os-section">
      <div className="os-section-header">
        <h2>
          <GraduationCap size={22} color="var(--accent-cyan)" /> Education
        </h2>
      </div>

      <div className="os-card" style={{ padding: '1.75rem' }}>
        {/* Degree & College Info */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            B.Tech – Computer Science Engineering
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '0.2rem' }}>
            {personalData.college || '[Your College]'}
          </p>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Expected Graduation: 2027
          </span>
        </div>

        {/* Relevant Coursework */}
        <div>
          <h4 style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: '700' }}>
            Relevant Coursework
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
            {coursework.map((course, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

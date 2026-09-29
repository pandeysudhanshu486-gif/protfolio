import React from 'react';
import { Trophy, Award, Code2, Layers, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  const achievementsList = [
    {
      title: 'CodeChef 3★ Coder',
      desc: 'Division 2 / 3 Competitive Programming',
      extra: 'Regular participation in algorithmic challenges',
      icon: Award,
      color: '#fbbf24'
    },
    {
      title: 'LeetCode 100+ Solved',
      desc: '1580 Contest Rating Milestone',
      extra: 'Consistent DSA practice (Arrays, Graphs, Trees, DP)',
      icon: Code2,
      color: '#FFA116'
    },
    {
      title: 'Smart India Hackathon (SIH)',
      desc: 'Project Prototype Participation',
      extra: 'Built AI-powered software addressing real problem statements',
      icon: Trophy,
      color: '#eab308'
    },
    {
      title: 'Full Stack & AI Certifications',
      desc: 'Modern Web & LLM Integration',
      extra: 'Production-level React, APIs & Prompt pipelines',
      icon: Layers,
      color: 'var(--accent-cyan)'
    }
  ];

  const journeySteps = [
    { title: 'Foundation', subtitle: 'Learn C++ basics, syntax & build logic' },
    { title: 'DSA Practice', subtitle: 'Arrays, Linked Lists, Trees, Graphs & DP' },
    { title: 'Competitive Programming', subtitle: 'CodeChef 3★ rating & contest practice' },
    { title: 'LeetCode', subtitle: '100+ problems solved & 1580 contest rating' },
    { title: 'Full Stack Projects', subtitle: 'AI Interview Agent & VayuFusion-AI' },
    { title: 'Hackathons', subtitle: 'SIH Prototype innovation & collaboration' },
    { title: 'Internship Ready', subtitle: 'Open to Software Engineering roles (2025-2029)' },
    { title: 'Software Engineering', subtitle: 'Building robust, scalable production systems' }
  ];

  return (
    <section id="achievements" className="os-section">
      <div className="os-section-header">
        <h2>
          <Trophy size={22} color="var(--accent-cyan)" /> Achievements & Coding Journey
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.75rem',
          alignItems: 'start'
        }}
        className="os-achieve-grid"
      >
        {/* Left Column: Achievements Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            Verified Milestones
          </h3>

          {achievementsList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="os-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <IconComp size={20} color={item.color} />
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.98rem', color: 'var(--text-primary)', margin: 0 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.15rem 0' }}>
                    {item.desc}
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {item.extra}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Problem Solving Journey Roadmap */}
        <div className="os-card" style={{ padding: '1.75rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            Problem Solving Journey
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
            {/* Vertical Connecting Line */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                bottom: '10px',
                left: '7px',
                width: '2px',
                backgroundColor: 'rgba(56, 189, 248, 0.25)'
              }}
            />

            {journeySteps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative' }}>
                <span
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#0a0f1d',
                    border: '3px solid var(--accent-cyan)',
                    boxShadow: '0 0 8px rgba(56, 189, 248, 0.5)',
                    flexShrink: 0,
                    zIndex: 2,
                    marginTop: '2px'
                  }}
                />
                <div>
                  <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {step.title}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {step.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .os-achieve-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Achievements;

import React from 'react';
import { Code2, Layout, Server, Database, Bot, Wrench } from 'lucide-react';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Programming',
      icon: Code2,
      skills: ['C++', 'Python', 'JavaScript']
    },
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['HTML', 'CSS', 'React', 'JavaScript']
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'SQL']
    },
    {
      title: 'AI / ML',
      icon: Bot,
      skills: ['AI API Integration', 'LLM Fundamentals', 'AI automations']
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    }
  ];

  return (
    <section id="skills" className="os-section">
      <div className="os-section-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem' }}>
        <h2>
          <span className="code-bracket">&lt;/&gt;</span> Skills & Technologies
        </h2>
        <p>Tools I use to build, learn and solve problems.</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {skillsCategories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div
              key={idx}
              className="os-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1.4rem'
              }}
            >
              {/* Category Title & Icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(37, 99, 235, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(56, 189, 248, 0.2)'
                  }}
                >
                  <IconComp size={18} color="var(--accent-cyan)" />
                </div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0 }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontSize: '0.84rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

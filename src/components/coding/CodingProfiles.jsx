import React from 'react';
import { Github, Code2, Award, Terminal, Linkedin, ExternalLink, Code } from 'lucide-react';
import { codingProfilesData } from '../../data/profiles';

const CodingProfiles = () => {
  return (
    <section id="coding" className="os-section">
      <div className="os-section-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem' }}>
        <h2>
          <Code size={22} color="var(--accent-cyan)" /> Developer Profiles
        </h2>
        <p>My verified coding journey, contest ratings, and online presence.</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {codingProfilesData.map((p) => {
          let IconComponent = Code;
          if (p.id === 'github') IconComponent = Github;
          if (p.id === 'leetcode') IconComponent = Code2;
          if (p.id === 'codechef') IconComponent = Award;
          if (p.id === 'hackerrank') IconComponent = Terminal;
          if (p.id === 'linkedin') IconComponent = Linkedin;

          return (
            <div
              key={p.id}
              className="os-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.5rem 1rem'
              }}
            >
              {/* Profile Icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.85rem'
                }}
              >
                <IconComponent size={24} color={p.color} />
              </div>

              {/* Platform & Username */}
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {p.platform}
              </h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '1rem', wordBreak: 'break-all' }}>
                @{p.username}
              </span>

              {/* Mini Stats Chips */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.35rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.25)',
                  padding: '0.6rem 0.4rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.25rem',
                  width: '100%',
                  border: '1px solid var(--border-color)'
                }}
              >
                {p.stats.map((st, sIdx) => (
                  <div key={sIdx} style={{ textAlign: 'center' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)' }}>{st.value}</strong>
                    <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)' }}>{st.label}</span>
                  </div>
                ))}
              </div>

              {/* View Profile Button */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-os-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.45rem',
                  fontSize: '0.82rem',
                  marginBottom: '0.75rem',
                  textDecoration: 'none'
                }}
              >
                View Profile <ExternalLink size={13} />
              </a>

              {/* Tag / Badge */}
              <span style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                {p.badge}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CodingProfiles;

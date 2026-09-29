import React from 'react';
import { Github, Code2, Award, Terminal, Linkedin, ExternalLink } from 'lucide-react';
import Badge from '../common/Badge';

const iconMap = {
  Github,
  Code2,
  Award,
  Terminal,
  Linkedin
};

const ProfileCard = ({ profile }) => {
  const IconComponent = iconMap[profile.iconName] || Code2;

  return (
    <div className="card-base" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <IconComponent size={22} color={profile.color || 'var(--accent-primary)'} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0 }}>
              {profile.platform}
            </h3>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              @{profile.username}
            </span>
          </div>
        </div>

        <Badge variant="primary">{profile.badge}</Badge>
      </div>

      {/* Stats Breakdown */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '0.85rem',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '1.25rem',
          border: '1px solid var(--border-color)'
        }}
      >
        {profile.stats.map((stat, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
              {stat.value}
            </span>
            <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.88rem',
            fontWeight: '600',
            color: 'var(--accent-primary)'
          }}
        >
          View Verified Profile <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;

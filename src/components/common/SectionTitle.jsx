import React from 'react';

const SectionTitle = ({ title, subtitle, badge, centered = false }) => {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '3rem' }}>
      {badge && (
        <span className="badge" style={{ marginBottom: '0.75rem' }}>
          {badge}
        </span>
      )}
      <h2 style={{ fontSize: '2.25rem', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ maxWidth: centered ? '650px' : '750px', margin: centered ? '0 auto' : '0', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variantStyles = {
    primary: {
      backgroundColor: 'rgba(56, 189, 248, 0.1)',
      color: 'var(--accent-primary)',
      border: '1px solid rgba(56, 189, 248, 0.25)',
    },
    emerald: {
      backgroundColor: 'rgba(52, 211, 153, 0.1)',
      color: 'var(--accent-emerald)',
      border: '1px solid rgba(52, 211, 153, 0.25)',
    },
    indigo: {
      backgroundColor: 'rgba(129, 140, 248, 0.1)',
      color: 'var(--accent-secondary)',
      border: '1px solid rgba(129, 140, 248, 0.25)',
    },
    neutral: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-color)',
    }
  };

  return (
    <span
      className={`badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.25rem 0.7rem',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.8rem',
        fontWeight: '600',
        fontFamily: 'var(--font-mono)',
        ...(variantStyles[variant] || variantStyles.primary)
      }}
    >
      {children}
    </span>
  );
};

export default Badge;

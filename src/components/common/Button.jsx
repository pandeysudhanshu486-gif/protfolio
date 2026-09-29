import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  download,
  target,
  rel,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: '600',
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--transition-normal)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    border: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    fontFamily: 'var(--font-sans)',
  };

  const sizes = {
    sm: { padding: '0.4rem 0.85rem', fontSize: '0.85rem' },
    md: { padding: '0.65rem 1.35rem', fontSize: '0.95rem' },
    lg: { padding: '0.85rem 1.75rem', fontSize: '1.05rem' },
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--accent-primary)',
      color: '#090D16',
      boxShadow: '0 4px 14px rgba(56, 189, 248, 0.35)',
    },
    secondary: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-color)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--accent-primary)',
      border: '1px solid var(--accent-primary)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--text-secondary)',
    }
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizes[size],
    ...variants[variant],
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        style={combinedStyles}
        className={`btn btn-${variant} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={combinedStyles}
      className={`btn btn-${variant} ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;

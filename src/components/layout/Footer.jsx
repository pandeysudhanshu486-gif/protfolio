import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { OS_NAV_ITEMS } from '../../utils/constants';
import { personalData } from '../../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: 'auto',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        {/* Left: Brand & Slogan */}
        <div>
          <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-mono)', margin: 0, fontWeight: '800' }}>
            <span>SUDHANSHU</span>
            <span style={{ color: 'var(--accent-cyan)' }}>.OS</span>
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
            Engineering ideas into intelligent systems.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          {OS_NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                transition: 'color var(--transition-fast)'
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Social & Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <a href={personalData.socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <Github size={16} />
            </a>
            <a href={personalData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <Linkedin size={16} />
            </a>
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            © {currentYear} Sudhanshu. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

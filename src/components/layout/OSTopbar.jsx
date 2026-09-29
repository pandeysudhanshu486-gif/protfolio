import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Search, FileText, Menu, X, Zap } from 'lucide-react';
import { personalData } from '../../data/personal';

const OSTopbar = ({
  theme,
  toggleTheme,
  onOpenCommandPalette,
  onOpenRecruiterPitch,
  onOpenResumeModal,
  mobileOpen,
  setMobileOpen
}) => {
  return (
    <header
      style={{
        height: 'var(--topbar-height)',
        backgroundColor: 'var(--bg-sidebar)',
        borderBottom: '1px solid var(--border-color)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        backdropFilter: 'blur(16px)'
      }}
    >
      {/* Brand: SUDHANSHU.OS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'none',
            padding: '0.25rem'
          }}
          className="os-mobile-menu-btn"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link
          to="/"
          style={{
            fontSize: '1.15rem',
            fontWeight: '800',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            textDecoration: 'none',
            letterSpacing: '0.05em'
          }}
        >
          <span>SUDHANSHU</span>
          <span style={{ color: 'var(--accent-cyan)' }}>.OS</span>
        </Link>
      </div>

      {/* Top Right Controls & System Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        {/* System Status: ONLINE */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)',
            padding: '0.25rem 0.65rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)'
          }}
          className="os-system-status-pill"
        >
          <span style={{ color: 'var(--text-muted)' }}>STATUS</span>
          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
          <span style={{ color: 'var(--accent-emerald)', fontWeight: '700' }}>ONLINE</span>
        </div>

        {/* 30-Second Recruiter Pitch Button */}
        <button
          onClick={() => onOpenRecruiterPitch && onOpenRecruiterPitch(true)}
          className="btn-os-primary"
          style={{
            padding: '0.32rem 0.75rem',
            fontSize: '0.78rem',
            background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
            boxShadow: '0 0 14px rgba(245, 158, 11, 0.4)',
            gap: '0.3rem'
          }}
        >
          <Zap size={13} /> 30s Pitch
        </button>

        {/* Search / Command Palette */}
        <button
          onClick={() => onOpenCommandPalette(true)}
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            padding: '0.35rem 0.65rem',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <Search size={14} color="var(--accent-cyan)" />
          <span className="topbar-search-text">Cmd+K</span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '0.25rem'
          }}
        >
          {theme === 'dark' ? <Sun size={17} color="var(--accent-amber)" /> : <Moon size={17} color="var(--accent-cyan)" />}
        </button>

        {/* In-App Resume Preview Trigger */}
        <button
          onClick={() => onOpenResumeModal && onOpenResumeModal(true)}
          className="btn-os-secondary"
          style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
        >
          <FileText size={14} /> Resume
        </button>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .os-mobile-menu-btn { display: flex !important; }
          .topbar-search-text { display: none !important; }
          .os-system-status-pill { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default OSTopbar;

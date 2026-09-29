import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { OS_NAV_ITEMS } from '../../utils/constants';
import { Keyboard } from 'lucide-react';

const OSSidebar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        style={{
          width: 'var(--sidebar-width)',
          backgroundColor: 'var(--bg-sidebar)',
          borderRight: '1px solid var(--border-color)',
          height: 'calc(100vh - var(--topbar-height))',
          position: 'fixed',
          top: 'var(--topbar-height)',
          left: 0,
          zIndex: 90,
          padding: '1.25rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}
        className="os-desktop-sidebar"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {OS_NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  backgroundColor: isActive ? '#2563eb' : 'transparent',
                  boxShadow: isActive ? '0 0 16px rgba(37, 99, 235, 0.45)' : 'none',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: isActive ? '#93c5fd' : 'var(--text-muted)'
                  }}
                >
                  {item.num}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Sidebar Keyboard Shortcuts Hint Box */}
        <div
          style={{
            marginTop: '1rem',
            padding: '0.75rem',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(56, 189, 248, 0.05)',
            border: '1px solid rgba(56, 189, 248, 0.15)',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-cyan)', marginBottom: '0.25rem', fontWeight: '700' }}>
            <Keyboard size={13} /> OS SHORTCUTS
          </div>
          <span>Press <strong>1</strong>-<strong>9</strong> or <strong>0</strong> to jump screens</span>
        </div>
      </aside>

      {/* Mobile Offcanvas Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--topbar-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(5, 8, 17, 0.95)',
            backdropFilter: 'blur(16px)',
            zIndex: 999,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {OS_NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? '#ffffff' : 'var(--text-primary)',
                  backgroundColor: isActive ? '#2563eb' : 'rgba(255, 255, 255, 0.04)',
                  textDecoration: 'none'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#93c5fd' }}>
                  {item.num}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .os-desktop-sidebar { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default OSSidebar;

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, FileText, Search, Terminal } from 'lucide-react';
import { NAV_ITEMS, SECTION_IDS } from '../../utils/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { personalData } from '../../data/personal';
import Button from '../common/Button';

const Navbar = ({ theme, toggleTheme, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS, 120);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = isScrolled ? 70 : 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: isScrolled ? '64px' : '78px',
        backgroundColor: isScrolled ? 'var(--bg-card)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all var(--transition-normal)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            textDecoration: 'none'
          }}
        >
          <span style={{ color: 'var(--accent-primary)' }}>&lt;</span>
          <span>{personalData.name.split(' ')[0]}</span>
          <span style={{ color: 'var(--accent-primary)' }}>/&gt;</span>
        </a>

        {/* Desktop Navigation links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.15rem'
          }}
          className="desktop-nav"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  fontSize: '0.86rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  transition: 'color var(--transition-fast)',
                  position: 'relative',
                  padding: '0.25rem 0'
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--accent-primary)',
                      borderRadius: 'var(--radius-full)'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action icons & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Quick Command Palette Search Button */}
          <button
            onClick={() => onOpenCommandPalette(true)}
            aria-label="Open Command Search"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              padding: '0.45rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <Search size={15} color="var(--accent-primary)" />
            <span className="cmd-k-text">Cmd+K</span>
          </button>

          {/* Social Links */}
          <a
            href={personalData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', padding: '0.35rem' }}
          >
            <Github size={18} />
          </a>
          <a
            href={personalData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', padding: '0.35rem' }}
          >
            <Linkedin size={18} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              padding: '0.45rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {theme === 'dark' ? <Sun size={17} color="var(--accent-amber)" /> : <Moon size={17} color="var(--accent-secondary)" />}
          </button>

          {/* Resume CTA Button */}
          <Button
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={FileText}
            className="resume-btn"
          >
            Resume
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.25rem'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: isScrolled ? '64px' : '78px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: 'var(--shadow-lg)'
          }}
          className="mobile-drawer"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                fontSize: '1rem',
                fontWeight: activeSection === item.id ? '700' : '500',
                color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                textDecoration: 'none',
                padding: '0.4rem 0'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .resume-btn { display: none !important; }
          .cmd-k-text { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;

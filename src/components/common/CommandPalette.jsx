import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, Code2, Briefcase, GraduationCap, Trophy, Mail, Github, Linkedin, ExternalLink, BookOpen, Code } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { personalData } from '../../data/personal';

const CommandPalette = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    { label: '01 Home Screen', icon: Code2, action: () => { navigate('/'); onClose(false); } },
    { label: '02 About Me', icon: Code2, action: () => { navigate('/about'); onClose(false); } },
    { label: '03 Skills & Technologies', icon: Code2, action: () => { navigate('/skills'); onClose(false); } },
    { label: '04 Project Lab', icon: Code2, action: () => { navigate('/projects'); onClose(false); } },
    { label: '05 Experience', icon: Briefcase, action: () => { navigate('/experience'); onClose(false); } },
    { label: '06 Achievements & Journey', icon: Trophy, action: () => { navigate('/achievements'); onClose(false); } },
    { label: '07 Education & Coursework', icon: GraduationCap, action: () => { navigate('/education'); onClose(false); } },
    { label: '08 Developer Profiles', icon: Code, action: () => { navigate('/coding'); onClose(false); } },
    { label: '09 Research & Work', icon: BookOpen, action: () => { navigate('/research'); onClose(false); } },
    { label: '10 Contact Sudhanshu', icon: Mail, action: () => { navigate('/contact'); onClose(false); } },
    { label: 'View Resume (PDF)', icon: FileText, action: () => window.open(personalData.resumeUrl, '_blank') },
    { label: 'Open GitHub Profile', icon: Github, action: () => window.open(personalData.socialLinks.github, '_blank') },
    { label: 'Open LinkedIn Profile', icon: Linkedin, action: () => window.open(personalData.socialLinks.linkedin, '_blank') }
  ];

  const filteredProjects = projectsData.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredActions = quickActions.filter(a =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 8, 17, 0.88)',
        backdropFilter: 'blur(16px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '12vh',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}
      onClick={() => onClose(false)}
    >
      <div
        className="os-card"
        style={{
          width: '100%',
          maxWidth: '640px',
          padding: 0,
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          overflow: 'hidden',
          backgroundColor: '#0a0f1d'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: '#070b16'
          }}
        >
          <Search size={18} color="var(--accent-cyan)" />
          <input
            type="text"
            autoFocus
            placeholder="Search screens, projects, or commands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-sans)'
            }}
          />
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'var(--text-muted)' }}>
            ESC
          </span>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '0.75rem' }}>
          {/* Projects Results */}
          {filteredProjects.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: '700', color: 'var(--text-muted)', padding: '0.4rem 0.6rem', fontFamily: 'var(--font-mono)' }}>
                PROJECT LAB & CASE STUDIES
              </span>
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    navigate('/projects');
                    if (onSelectProject) onSelectProject(p);
                    onClose(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    transition: 'background-color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div>
                    <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.88rem' }}>
                      {p.name}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {p.category} • {p.techStack.slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <ExternalLink size={14} color="var(--accent-cyan)" />
                </div>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          <div>
            <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: '700', color: 'var(--text-muted)', padding: '0.4rem 0.6rem', fontFamily: 'var(--font-mono)' }}>
              SUDHANSHU.OS SCREENS & SHORTCUTS
            </span>
            {filteredActions.map((action, idx) => {
              const ActionIcon = action.icon;
              return (
                <div
                  key={idx}
                  onClick={action.action}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    transition: 'background-color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <ActionIcon size={16} color="var(--accent-cyan)" />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                    {action.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

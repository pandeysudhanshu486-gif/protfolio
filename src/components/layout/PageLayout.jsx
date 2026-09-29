import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OSTopbar from './OSTopbar';
import OSSidebar from './OSSidebar';
import Footer from './Footer';
import BackToTop from '../common/BackToTop';
import CommandPalette from '../common/CommandPalette';
import ProjectModal from '../projects/ProjectModal';
import ResumeModal from '../common/ResumeModal';
import RecruiterPitchModal from '../common/RecruiterPitchModal';
import Toast from '../common/Toast';
import { useTheme } from '../../hooks/useTheme';
import { OS_NAV_ITEMS } from '../../utils/constants';
import { personalData } from '../../data/personal';

const PageLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isRecruiterPitchOpen, setIsRecruiterPitchOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Toast notification state
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: '', type: 'success' });
    }, 2800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    showToast(`Copied ${personalData.email} to clipboard!`, 'success');
  };

  // Keyboard navigation shortcuts (1-9, 0)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger when user is typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key;
      let targetItem = null;

      if (key >= '1' && key <= '9') {
        const index = parseInt(key, 10) - 1;
        targetItem = OS_NAV_ITEMS[index];
      } else if (key === '0') {
        targetItem = OS_NAV_ITEMS[9]; // 10 Contact
      }

      if (targetItem) {
        navigate(targetItem.path);
        showToast(`Shortcut [${key}]: ${targetItem.label}`, 'info');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <OSTopbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCommandPalette={setIsCommandPaletteOpen}
        onOpenRecruiterPitch={setIsRecruiterPitchOpen}
        onOpenResumeModal={setIsResumeModalOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div style={{ display: 'flex', flex: 1, marginTop: 'var(--topbar-height)' }}>
        <OSSidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* Main Content Area */}
        <main
          style={{
            flex: 1,
            marginLeft: 'var(--sidebar-width)',
            minWidth: 0,
            padding: '2rem',
            maxWidth: '1200px',
            minHeight: 'calc(100vh - var(--topbar-height))',
            display: 'flex',
            flexDirection: 'column'
          }}
          className="os-main-content"
        >
          <div style={{ flex: 1 }} className="animate-fade-in">
            {React.cloneElement(children, {
              onOpenResumeModal: setIsResumeModalOpen,
              onOpenRecruiterPitch: setIsRecruiterPitchOpen,
              onCopyEmail: handleCopyEmail,
              onSelectProject: handleSelectProject
            })}
          </div>
          <Footer />
        </main>
      </div>

      <BackToTop />

      {/* Global Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />

      {/* Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={setIsCommandPaletteOpen}
        onSelectProject={handleSelectProject}
      />

      {/* 30-Second Recruiter Pitch Modal */}
      <RecruiterPitchModal
        isOpen={isRecruiterPitchOpen}
        onClose={() => setIsRecruiterPitchOpen(false)}
        onCopyEmail={handleCopyEmail}
      />

      {/* In-App Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />

      <style>{`
        @media (max-width: 900px) {
          .os-main-content {
            margin-left: 0 !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PageLayout;

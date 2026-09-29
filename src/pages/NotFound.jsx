import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="container" style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 1rem' }}>
      <div style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(244, 63, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <AlertCircle size={32} color="var(--accent-rose)" />
      </div>
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', marginBottom: '2rem' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button href="/" variant="primary" icon={ArrowLeft}>
        Return to Home
      </Button>
    </div>
  );
};

export default NotFound;

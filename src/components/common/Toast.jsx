import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        backgroundColor: '#0a0f1d',
        border: '1px solid rgba(56, 189, 248, 0.4)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 20px rgba(56, 189, 248, 0.2)',
        borderRadius: 'var(--radius-md)',
        padding: '0.75rem 1.2rem',
        color: 'var(--text-primary)',
        fontSize: '0.88rem',
        fontFamily: 'var(--font-mono)',
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {type === 'success' && <CheckCircle2 size={18} color="var(--accent-emerald)" />}
      {type === 'info' && <Info size={18} color="var(--accent-cyan)" />}
      {type === 'error' && <AlertCircle size={18} color="var(--accent-rose)" />}
      
      <span>{message}</span>

      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.1rem',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '0.5rem'
          }}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};

export default Toast;

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play } from 'lucide-react';
import { personalData } from '../../data/personal';
import { scrollToSection } from '../../utils/helpers';

const TerminalPlayground = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      command: 'whoami',
      output: `Name: ${personalData.name}\nRole: ${personalData.title}\nStatus: Enrolled in 2nd Year (B.Tech CSE)\nAvailable for: Software Engineering Internships & Projects`
    }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const cleanCmd = (cmdText || inputVal).trim().toLowerCase();
    if (!cleanCmd) return;

    let response = '';

    switch (cleanCmd) {
      case 'help':
        response = `Available Commands:\n• whoami    - Display developer profile info\n• skills    - List technical stack & proficiencies\n• projects  - View key engineering case studies\n• contact   - Get direct email & social handles\n• sudo hire - Unlock recruitment invitation & resume\n• clear     - Clear terminal screen`;
        break;

      case 'whoami':
        response = `Name: ${personalData.name}\nRole: ${personalData.title}\nLocation: ${personalData.location}\nFocus: Data Structures, AI/LLMs & Modern Web Systems`;
        break;

      case 'skills':
        response = `Languages: C++, Python, JavaScript (ES6+), SQL\nFrontend: React.js, Vite, HTML5/CSS3, Responsive Design\nBackend: Node.js, Express.js, RESTful APIs\nAI / ML: Prompt Pipelines, RAG Fundamentals, OpenAI/Gemini APIs`;
        break;

      case 'projects':
        response = `1. AI Technical Interview Agent (Autonomous mock interview system)\n2. VAYUFUSION AI (AQI & environmental intelligence platform)\n3. Healthcare AI Assistant (Preliminary symptom triage & RAG)\n4. AI Resume Analyzer (ATS matching & keyword scoring)`;
        break;

      case 'contact':
        response = `Email: ${personalData.email}\nGitHub: ${personalData.socialLinks.github}\nLinkedIn: ${personalData.socialLinks.linkedin}`;
        break;

      case 'sudo hire':
      case 'hire':
        response = `🚀 Access Granted! Sudhanshu is actively interviewing for Summer/Fall Internships.\nOpening resume and navigating to contact section...`;
        setTimeout(() => {
          scrollToSection('contact');
        }, 1200);
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        response = `Command not recognized: '${cleanCmd}'. Type 'help' to view available commands.`;
        break;
    }

    setHistory(prev => [...prev, { command: cleanCmd, output: response }]);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand();
  };

  return (
    <div
      className="card-base"
      style={{
        padding: 0,
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-color-hover)',
        boxShadow: 'var(--shadow-glow)',
        borderRadius: 'var(--radius-lg)',
        fontFamily: 'var(--font-mono)',
        overflow: 'hidden'
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.25rem',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f43f5e', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#fbbf24', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#34d399', display: 'inline-block' }} />
          <span style={{ marginLeft: '0.5rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            sudhanshu@dev-box: ~
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>
          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
          <span>Interactive Shell</span>
        </div>
      </div>

      {/* Terminal Content Stream */}
      <div
        style={{
          padding: '1.25rem',
          minHeight: '230px',
          maxHeight: '300px',
          overflowY: 'auto',
          fontSize: '0.86rem',
          lineHeight: '1.6',
          color: 'var(--text-secondary)'
        }}
      >
        <p style={{ color: 'var(--text-muted)', marginBottom: '0.75rem', fontSize: '0.8rem' }}>
          Welcome to Sudhanshu's interactive shell. Type <code>help</code> or tap the chips below.
        </p>

        {history.map((item, index) => (
          <div key={index} style={{ marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
              <span style={{ color: 'var(--accent-emerald)' }}>➜</span>
              <span style={{ color: 'var(--accent-primary)' }}>~</span>
              <span style={{ fontWeight: '600' }}>{item.command}</span>
            </div>
            <pre style={{ whiteSpace: 'pre-wrap', color: 'var(--text-secondary)', marginTop: '0.3rem', paddingLeft: '1.1rem', fontSize: '0.84rem' }}>
              {item.output}
            </pre>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Suggested Command Quick Chips */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          padding: '0.5rem 1.25rem',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          borderTop: '1px solid var(--border-color)'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center', marginRight: '0.2rem' }}>
          Quick:
        </span>
        {['whoami', 'skills', 'projects', 'sudo hire', 'help', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            style={{
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: cmd === 'sudo hire' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: cmd === 'sudo hire' ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
              color: cmd === 'sudo hire' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer'
            }}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Command Line */}
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.25rem',
          backgroundColor: 'var(--bg-tertiary)',
          borderTop: '1px solid var(--border-color)'
        }}
      >
        <span style={{ color: 'var(--accent-emerald)' }}>➜</span>
        <span style={{ color: 'var(--accent-primary)' }}>~</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help' and press Enter..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.86rem'
          }}
        />
        <button
          type="submit"
          aria-label="Run command"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <CornerDownLeft size={16} />
        </button>
      </form>
    </div>
  );
};

export default TerminalPlayground;

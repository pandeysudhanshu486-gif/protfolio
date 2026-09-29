import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Github, Code2, Award, Terminal, Linkedin, Zap, Copy, Cpu } from 'lucide-react';
import { personalData } from '../../data/personal';

const Hero = ({ onOpenResumeModal, onOpenRecruiterPitch, onCopyEmail }) => {
  const roleTags = [
    'Software Developer',
    'AI Enthusiast',
    'Full Stack Developer',
    'Problem Solver',
    'Competitive Programmer'
  ];

  return (
    <section id="home" style={{ padding: '0.5rem 0 2rem 0', position: 'relative' }}>
      {/* Top Quick Action Notification Pill */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        <button
          onClick={() => onOpenRecruiterPitch && onOpenRecruiterPitch(true)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            color: '#fbbf24',
            fontSize: '0.78rem',
            fontWeight: '700',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <Zap size={13} color="#fbbf24" /> ⚡ Recruiter? Click for 30s Pitch Mode
        </button>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            color: 'var(--accent-cyan)',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          ⌨️ OS Shortcuts Active: Press keys 1-9 to navigate
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 0.75fr',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '2rem'
        }}
        className="os-hero-grid"
      >
        {/* Left: Introduction & Details */}
        <div>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '0.65rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Hi, I'm {personalData.name.split(' ')[0]} 👋
          </h2>

          <h1
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            Computer Science Engineering Student & Software Developer
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: '1.65',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              maxWidth: '580px'
            }}
          >
            {personalData.bio}
          </p>

          {/* Role Pill Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
            {roleTags.map((tag, idx) => (
              <span key={idx} className="os-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2rem' }}>
            <Link
              to="/projects"
              className="btn-os-primary"
              style={{ padding: '0.65rem 1.35rem', textDecoration: 'none' }}
            >
              View Projects <ArrowRight size={16} />
            </Link>

            <button
              onClick={() => onOpenResumeModal && onOpenResumeModal(true)}
              className="btn-os-secondary"
              style={{ padding: '0.65rem 1.35rem' }}
            >
              <FileText size={16} /> Preview Resume
            </button>

            {onCopyEmail && (
              <button
                onClick={onCopyEmail}
                className="btn-os-secondary"
                style={{ padding: '0.65rem 1rem' }}
                title="Copy email to clipboard"
              >
                <Copy size={15} /> Copy Email
              </button>
            )}
          </div>

          {/* Developer Profiles Bar */}
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                marginBottom: '0.75rem',
                letterSpacing: '0.05em'
              }}
            >
              DEVELOPER PROFILES
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}
              >
                <Github size={16} /> GitHub
              </a>

              <a
                href={personalData.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}
              >
                <Code2 size={16} color="#FFA116" /> LeetCode
              </a>

              <a
                href={personalData.socialLinks.codechef}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}
              >
                <Award size={16} color="#5B4638" /> CodeChef
              </a>

              <a
                href={personalData.socialLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}
              >
                <Terminal size={16} color="#2EC4B6" /> HackerRank
              </a>

              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}
              >
                <Linkedin size={16} color="#0A66C2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right: Real Profile Image in Cyber Neon Portal & Quote */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div
            style={{
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.35) 0%, rgba(10, 15, 29, 0.95) 75%)',
              border: '3px solid rgba(56, 189, 248, 0.5)',
              boxShadow: '0 0 45px rgba(56, 189, 248, 0.35), 0 0 15px rgba(37, 99, 235, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Sudhanshu's Real Profile Photo */}
            <img
              src={personalData.profileImage}
              alt={personalData.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                borderRadius: '50%'
              }}
            />

            {/* Glowing Code Symbol */}
            <div
              style={{
                position: 'absolute',
                left: '14px',
                bottom: '20px',
                background: 'rgba(10, 15, 29, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '0.35rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(56, 189, 248, 0.5)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#38bdf8',
                fontWeight: '700',
                boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              &lt;/&gt;
            </div>
          </div>

          {/* Quote Under Avatar */}
          <div
            style={{
              marginTop: '1.25rem',
              textAlign: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--accent-cyan)'
            }}
          >
            <p style={{ fontStyle: 'italic', color: '#93c5fd' }}>"Better Code, Better Tomorrow"</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>— Sudhanshu</p>
          </div>
        </div>
      </div>

      {/* 3 Interactive Feature Callout Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.75rem'
        }}
        className="os-hero-callouts"
      >
        <div
          className="os-card"
          onClick={() => onOpenRecruiterPitch && onOpenRecruiterPitch(true)}
          style={{ cursor: 'pointer', padding: '1rem', border: '1px solid rgba(245, 158, 11, 0.3)', backgroundColor: 'rgba(245, 158, 11, 0.05)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <Zap size={16} color="var(--accent-amber)" />
            <strong style={{ fontSize: '0.9rem', color: '#fbbf24' }}>30s Recruiter Mode</strong>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>
            Quick impact summary & candidate strengths for hiring managers.
          </p>
        </div>

        <div
          className="os-card"
          onClick={() => onOpenResumeModal && onOpenResumeModal(true)}
          style={{ cursor: 'pointer', padding: '1rem', border: '1px solid rgba(56, 189, 248, 0.3)', backgroundColor: 'rgba(56, 189, 248, 0.05)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <FileText size={16} color="var(--accent-cyan)" />
            <strong style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>In-App Resume Viewer</strong>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>
            Read, zoom, and print verified technical resume right in-browser.
          </p>
        </div>

        <Link
          to="/projects"
          className="os-card"
          style={{ textDecoration: 'none', padding: '1rem', border: '1px solid rgba(16, 185, 129, 0.3)', backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <Cpu size={16} color="var(--accent-emerald)" />
            <strong style={{ fontSize: '0.9rem', color: 'var(--accent-emerald)' }}>System Architecture Flow</strong>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>
            Inspect interactive node pipelines & engineering blueprints.
          </p>
        </Link>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .os-hero-grid { grid-template-columns: 1fr !important; }
          .os-hero-callouts { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

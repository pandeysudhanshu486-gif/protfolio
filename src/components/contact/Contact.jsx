import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MessageSquare, CheckCircle2, Copy } from 'lucide-react';
import { personalData } from '../../data/personal';

const Contact = ({ onCopyEmail }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `${personalData.socialLinks.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSent(true);
  };

  return (
    <section id="contact" className="os-section" style={{ borderBottom: 'none' }}>
      <div className="os-section-header">
        <h2>
          <MessageSquare size={22} color="var(--accent-cyan)" /> Contact
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '2rem',
          alignItems: 'start'
        }}
        className="os-contact-grid"
      >
        {/* Left: Contact Info */}
        <div className="os-card" style={{ padding: '1.75rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Let's Build Something Useful.
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Whether you have an internship opportunity, freelance inquiry, or technical question, feel free to reach out.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="var(--accent-cyan)" />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)' }}>Email</span>
                  <a href={personalData.socialLinks.email} style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                    {personalData.email}
                  </a>
                </div>
              </div>

              {onCopyEmail && (
                <button
                  onClick={onCopyEmail}
                  title="Copy email to clipboard"
                  style={{
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    color: 'var(--accent-cyan)',
                    padding: '0.35rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem'
                  }}
                >
                  <Copy size={13} /> Copy
                </button>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Github size={18} color="var(--text-primary)" />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)' }}>GitHub</span>
                <a href={personalData.socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                  github.com/sudhanshupandey
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(10, 102, 194, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Linkedin size={18} color="#0A66C2" />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)' }}>LinkedIn</span>
                <a href={personalData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                  linkedin.com/in/sudhanshupandey
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="os-card" style={{ padding: '1.75rem' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle2 size={40} color="var(--accent-emerald)" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Message Prepared!</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Your default email client has been opened to send this message.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#070b16',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#070b16',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#070b16',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-os-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.88rem' }}
              >
                Send Message <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .os-contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;

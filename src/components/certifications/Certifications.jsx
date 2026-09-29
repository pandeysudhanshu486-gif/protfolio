import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import SectionTitle from '../common/SectionTitle';
import Badge from '../common/Badge';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <SectionTitle
          badge="VERIFIED CREDENTIALS"
          title="Certifications & Training"
          subtitle="Industry and academic certifications in Web Development, DSA, and Artificial Intelligence."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {certificationsData.map((cert) => (
            <div key={cert.id} className="card-base" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={20} color="var(--accent-primary)" />
                </div>
                <Badge variant="emerald">Verified</Badge>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                {cert.name}
              </h3>

              <p style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>
                {cert.issuingOrganization}
              </p>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                Issued {cert.issueDate} • ID: {cert.credentialId}
              </p>

              {/* Covered Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem', marginTop: 'auto' }}>
                {cert.skillsCovered.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {cert.verificationLink && (
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem' }}>
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

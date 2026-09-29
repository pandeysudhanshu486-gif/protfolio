import React from 'react';
import { Layout, Bot, BarChart3, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../../data/services';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { scrollToSection } from '../../utils/helpers';

const iconMap = {
  Layout,
  Bot,
  BarChart3,
  Zap
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <SectionTitle
          badge="SERVICES & FREELANCING"
          title="What I Can Build For You"
          subtitle="Delivering production-grade web applications, AI tools, and custom digital solutions."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Zap;
            return (
              <div key={service.id} className="card-base" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <IconComponent size={24} color="var(--accent-primary)" />
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  {service.description}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.4rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={14} color="var(--accent-emerald)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div
          className="card-base"
          style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)',
            borderColor: 'var(--border-color-hover)'
          }}
        >
          <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            Have a project or opportunity in mind?
          </h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 1.75rem auto' }}>
            Let me help turn your requirements into clean, scalable software.
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => scrollToSection('contact')}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

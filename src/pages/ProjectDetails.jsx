import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, Cpu, Target } from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <p style={{ margin: '1rem 0 2rem 0' }}>The requested project case study could not be found.</p>
        <Button href="/" variant="primary" icon={ArrowLeft}>
          Back to Portfolio
        </Button>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--accent-primary)',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '2rem'
          }}
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <div className="card-base" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <Badge variant="emerald">{project.category} Case Study</Badge>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {project.github && (
                <Button href={project.github} target="_blank" variant="secondary" size="sm" icon={Github}>
                  Repository
                </Button>
              )}
              {project.liveDemo && (
                <Button href={project.liveDemo} target="_blank" variant="primary" size="sm" icon={ExternalLink}>
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            {project.name}
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            {project.tagline}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'rgba(244, 63, 94, 0.08)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(244, 63, 94, 0.2)' }}>
              <h3 style={{ color: 'var(--accent-rose)', fontSize: '1.05rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <AlertTriangle size={18} /> Problem Statement
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{project.problem}</p>
            </div>

            <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.08)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
              <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.05rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Lightbulb size={18} /> Motivation & Goals
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{project.motivation}</p>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Cpu size={20} color="var(--accent-secondary)" /> System Architecture
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{project.solution}</p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', padding: '1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--accent-emerald)' }}>
              {project.architecture}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Target size={20} color="var(--accent-emerald)" /> Key Implementation Features
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {project.challenges && project.challenges.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Engineering Challenges & Solutions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {project.challenges.map((c, idx) => (
                  <div key={idx} style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)' }}>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.35rem' }}>Issue: {c.issue}</p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--accent-emerald)' }}>✓ Resolution: {c.resolution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.personalContribution && (
            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-tertiary)', borderLeft: '4px solid var(--accent-primary)', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', marginBottom: '0.3rem' }}>MY PERSONAL ROLE</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{project.personalContribution}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

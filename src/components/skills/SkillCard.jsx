import React from 'react';
import {
  Code2,
  FileCode,
  Terminal,
  Database,
  Layout,
  Globe,
  Zap,
  Sparkles,
  Smartphone,
  Server,
  Cpu,
  Network,
  Layers,
  Bot,
  BrainCircuit,
  MessageSquareCode,
  GitBranch,
  Code,
  Send,
  Cloud
} from 'lucide-react';
import Badge from '../common/Badge';

const iconMap = {
  Code2,
  FileCode,
  Terminal,
  Database,
  Layout,
  Globe,
  Zap,
  Sparkles,
  Smartphone,
  Server,
  Cpu,
  Network,
  Layers,
  Bot,
  BrainCircuit,
  MessageSquareCode,
  GitBranch,
  Code,
  Send,
  Cloud
};

const SkillCard = ({ category, description, skills }) => {
  return (
    <div className="card-base" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
          {category}
        </h3>
        {description && (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {description}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginTop: 'auto' }}>
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon] || Code;
          
          let levelVariant = 'neutral';
          if (skill.level === 'Advanced') levelVariant = 'emerald';
          if (skill.level === 'Intermediate') levelVariant = 'primary';
          if (skill.level === 'Beginner') levelVariant = 'indigo';

          return (
            <div
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)'
              }}
            >
              <IconComponent size={16} color="var(--accent-primary)" />
              <span style={{ fontSize: '0.88rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                {skill.name}
              </span>
              {skill.level && (
                <Badge variant={levelVariant}>
                  {skill.level}
                </Badge>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;

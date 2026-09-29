import React, { useState } from 'react';
import { Layers, Cpu, Server, Database, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const ArchitectureDiagram = ({ project }) => {
  const [selectedNode, setSelectedNode] = useState(0);

  const nodes = [
    {
      id: 'client',
      title: 'Client UI Layer',
      tech: 'React.js + Vite',
      icon: Layers,
      color: 'var(--accent-cyan)',
      description: 'Single-page responsive dashboard interface handling user interactions, speech-to-text recording, and low-latency state rendering.',
      specs: ['Virtual DOM', 'Web Speech API', 'Client-side caching', '< 80ms interaction latency']
    },
    {
      id: 'gateway',
      title: 'API Gateway & Logic',
      tech: 'Node.js / Express',
      icon: Server,
      color: '#818cf8',
      description: 'RESTful API routing layer responsible for payload normalization, session authentication, rate limiting, and request validation.',
      specs: ['JSON Schema validation', 'CORS & Security headers', 'Async Worker queue', 'Token bucket rate-limiting']
    },
    {
      id: 'engine',
      title: 'AI Pipeline / RAG',
      tech: 'Python / LLM APIs',
      icon: Cpu,
      color: 'var(--accent-emerald)',
      description: 'Core intelligence engine that parses user code, executes semantic matching via vector embeddings, and applies evaluation guardrails.',
      specs: ['Prompt engineering templates', 'Strict JSON guardrails', 'Chunked streaming responses', 'Semantic context memory']
    },
    {
      id: 'database',
      title: 'Data & State Store',
      tech: 'MongoDB / PostgreSQL',
      icon: Database,
      color: 'var(--accent-amber)',
      description: 'Persistent storage layer for storing interview performance history, metrics logs, user accounts, and test scenarios.',
      specs: ['Document indexing', 'Encrypted credentials', 'Automated backups', 'Optimized query latency']
    }
  ];

  return (
    <div style={{ backgroundColor: '#070b16', borderRadius: 'var(--radius-md)', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <h4 style={{ fontSize: '0.98rem', color: 'var(--accent-cyan)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Cpu size={18} /> Interactive System Architecture Visualizer
        </h4>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Click any node to inspect specs
        </span>
      </div>

      {/* Interactive Node Step Pipeline */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.75rem',
          marginBottom: '1.5rem',
          position: 'relative'
        }}
        className="os-architecture-nodes"
      >
        {nodes.map((node, idx) => {
          const IconComp = node.icon;
          const isSelected = selectedNode === idx;
          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(idx)}
              style={{
                backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem 0.75rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: isSelected ? '0 0 16px rgba(56, 189, 248, 0.3)' : 'none',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem auto'
                }}
              >
                <IconComp size={18} color={node.color} />
              </div>

              <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: isSelected ? '#ffffff' : 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {node.title}
              </span>
              <span style={{ fontSize: '0.72rem', color: node.color, fontFamily: 'var(--font-mono)' }}>
                {node.tech}
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Node Detailed Breakdown Card */}
      {nodes[selectedNode] && (
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 'var(--radius-sm)',
            padding: '1.25rem',
            border: '1px solid var(--border-color)',
            animation: 'fadeIn 0.25s ease-out'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h5 style={{ fontSize: '0.92rem', color: nodes[selectedNode].color, margin: 0 }}>
              {nodes[selectedNode].title} ({nodes[selectedNode].tech})
            </h5>
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              Node {selectedNode + 1} of 4
            </span>
          </div>

          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
            {nodes[selectedNode].description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {nodes[selectedNode].specs.map((spec, sIdx) => (
              <span
                key={sIdx}
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  color: '#93c5fd'
                }}
              >
                ✓ {spec}
              </span>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 650px) {
          .os-architecture-nodes { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ArchitectureDiagram;

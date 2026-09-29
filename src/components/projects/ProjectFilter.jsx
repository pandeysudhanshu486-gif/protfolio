import React from 'react';

const ProjectFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.65rem',
        justifyContent: 'center',
        marginBottom: '2.5rem'
      }}
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.88rem',
              fontWeight: isActive ? '700' : '500',
              backgroundColor: isActive ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.04)',
              color: isActive ? '#090D16' : 'var(--text-secondary)',
              border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;

import React from 'react';

function ProjectCard({ project, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '25px',
        marginBottom: '20px',
        boxShadow: isHovered ? '0 8px 25px rgba(0,0,0,0.12)' : '0 3px 10px rgba(0,0,0,0.08)',
        transition: 'all 0.3s',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        border: '1px solid #f0f0f0'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ 
            margin: '0 0 12px 0', 
            fontSize: '1.6rem',
            color: '#2d3748',
            fontWeight: '600'
          }}>
            {project.title}
          </h3>
          <p style={{ 
            margin: 0, 
            color: '#718096', 
            fontSize: '1.05rem',
            lineHeight: '1.6'
          }}>
            {project.description}
          </p>
        </div>
        <button
          onClick={() => onDelete(project.id)}
          style={{
            width: '40px',
            height: '40px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#fee',
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.2s',
            color: '#e53e3e',
            marginLeft: '20px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#fc8181';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#fee';
            e.target.style.color = '#e53e3e';
          }}
          aria-label={`Delete ${project.title}`}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;

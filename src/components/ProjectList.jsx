import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList({ projects, onDelete }) {
  return (
    <div>
      <h2 style={{
        fontSize: '1.8rem',
        marginBottom: '25px',
        color: '#2d3748',
        fontWeight: '600'
      }}>
        📁 Your Projects ({projects.length})
      </h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onDelete={onDelete} />
      ))}
      {projects.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '2px dashed #e0e0e0'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '15px' }}>📂</div>
          <p style={{ 
            color: '#a0aec0', 
            fontSize: '1.2rem',
            margin: 0
          }}>
            No projects yet. Create your first one above!
          </p>
        </div>
      )}
    </div>
  );
}


export default ProjectList;

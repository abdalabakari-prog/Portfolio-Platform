import React from 'react';

function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      <button
        onClick={() => onDelete(project.id)}
        className="delete-button"
        aria-label={`Delete ${project.title}`}
      >
        ×
      </button>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
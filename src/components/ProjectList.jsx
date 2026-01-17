import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList({ projects, onDelete }) {
  return (
    <div className="project-list-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onDelete={onDelete} />
      ))}
      {projects.length === 0 && (
        <p className="no-projects">
          No projects found. Add a project to get started!
        </p>
      )}
    </div>
  );
}

export default ProjectList;
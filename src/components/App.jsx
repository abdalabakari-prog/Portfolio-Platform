import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import SearchBar from './SearchBar';
import ProjectList from './ProjectList';
import '../App.css';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of the project' },
    { id: 2, title: 'Project 2', description: 'Description of the project' },
    { id: 3, title: 'Project 3', description: 'Description of the project' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="app-content">
        <h1 className="app-title">Personal Project Showcase App</h1>
        <ProjectForm onAddProject={handleAddProject} />
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <ProjectList projects={filteredProjects} onDelete={handleDeleteProject} />
      </div>
    </div>
  );
}

export default App;
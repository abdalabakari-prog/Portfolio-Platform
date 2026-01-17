import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import SearchBar from './SearchBar';
import ProjectList from './ProjectList';
import '../App.css';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Portfolio Website', description: 'A stunning personal portfolio built with React and modern design principles' },
    { id: 2, title: 'E-Commerce Platform', description: 'Full-stack shopping application with payment integration and real-time inventory' },
    { id: 3, title: 'Task Management App', description: 'Collaborative project management tool with drag-and-drop functionality' }
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

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f7fafc 0%, #edf2f7 100%)',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <header style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: '3.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '10px',
            fontWeight: '800'
          }}>
            🎨 Project Showcase
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#718096',
            margin: 0
          }}>
            Manage and showcase your amazing work
          </p>
        </header>

        <ProjectForm onAddProject={handleAddProject} />
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <ProjectList projects={filteredProjects} onDelete={handleDeleteProject} />
      </div>
    </div>
  );
}

export default App;

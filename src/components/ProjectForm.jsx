import React, { useState } from 'react';

// ProjectForm Component
function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAddProject({
        id: Date.now(),
        title,
        description
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '16px',
      padding: '40px',
      marginBottom: '40px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      color: 'white'
    }}>
      <h2 style={{ marginTop: 0, fontSize: '2.2rem', marginBottom: '25px', fontWeight: '600' }}>
        ✨ Add New Project
      </h2>
      <div>
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontSize: '1rem', marginBottom: '10px', fontWeight: '500', opacity: 0.95 }}>
            Project Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your amazing project name..."
            style={{
              width: '100%',
              padding: '14px 18px',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '10px',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(255,255,255,0.95)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'all 0.3s'
            }}
          />
        </div>
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontSize: '1rem', marginBottom: '10px', fontWeight: '500', opacity: 0.95 }}>
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="Describe what makes this project special..."
            style={{
              width: '100%',
              padding: '14px 18px',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '10px',
              boxSizing: 'border-box',
              resize: 'vertical',
              backgroundColor: 'rgba(255,255,255,0.95)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              fontFamily: 'inherit'
            }}
          />
        </div>
        <button
          onClick={handleSubmit}
          style={{
            padding: '14px 35px',
            fontSize: '1.1rem',
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            color: '#667eea'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
          }}
        >
          🚀 Add Project
        </button>
      </div>
    </div>
  );
}

export default ProjectForm;

import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ position: 'relative' }}>
        <span style={{
          position: 'absolute',
          left: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '1.3rem'
        }}>
          🔍
        </span>
        <input
          type="text"
          placeholder="Search your projects..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 18px 16px 50px',
            fontSize: '1.1rem',
            border: '2px solid #e0e0e0',
            borderRadius: '12px',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            transition: 'all 0.3s',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.boxShadow = '0 4px 15px rgba(102,126,234,0.15)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e0e0e0';
            e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
          }}
        />
      </div>
    </div>
  );
}

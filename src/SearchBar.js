// src/SearchBar.js
import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <input
                type="text"
                placeholder="Buscar personajes"
                value={searchTerm}
                onChange={handleChange}
                style={{
                    padding: '10px',
                    width: '50%',
                    fontSize: '16px',
                    border: '2px solid blue',
                    borderRadius: '5px'
                }}
            />
        </div>
    );
}

export default SearchBar;

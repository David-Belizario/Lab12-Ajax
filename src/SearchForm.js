// src/SearchForm.js

import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

function SearchForm({ onSearchChange, loading }) {
    const handleInputChange = (event) => {
        onSearchChange(event.target.value);
    };

    return (
        <Form>
            <FormControl
                type="text"
                placeholder="Buscar personajes..."
                onChange={handleInputChange}
            />
        </Form>
    );
}

export default SearchForm;

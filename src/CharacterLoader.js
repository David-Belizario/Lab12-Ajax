// src/CharacterLoader.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CharacterCard from './CharacterCard';
import debounce from 'lodash.debounce';

function CharacterLoader() {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [initialLoad, setInitialLoad] = useState(false);

    const loadCharacters = (query = '') => {
        setLoading(true);
        axios
            .get(`https://swapi.dev/api/people/?search=${query}`)
            .then((response) => {
                setCharacters(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (initialLoad) {
            loadCharacters(search);
        }
    }, [search, initialLoad]);

    const handleSearchChange = debounce((event) => {
        setSearch(event.target.value);
    }, 300);

    const handleLoadClick = () => {
        setInitialLoad(true);
        loadCharacters(search);
    };

    return (
        <Container>
            <h1 style={{ color: 'blue', textAlign: 'center', margin: '20px 0' }}>Personajes de Star Wars</h1>
            <Form.Control
                type="text"
                placeholder="Buscar personajes..."
                onChange={handleSearchChange}
                style={{
                    borderRadius: '20px',
                    padding: '10px',
                    border: '2px solid blue',
                    marginBottom: '20px',
                    textAlign: 'center',
                }}
            />
            <Button onClick={handleLoadClick} disabled={loading || initialLoad} style={{ marginBottom: '20px' }}>
                {loading ? 'Cargando...' : 'Cargar personajes'}
            </Button>
            <Row>
                {characters.length > 0 ? (
                    characters.map((character, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={4}>
                            <CharacterCard character={character} />
                        </Col>
                    ))
                ) : (
                    <Col xs={12}>
                        <p style={{ textAlign: 'center' }}>No hay personajes disponibles.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default CharacterLoader;

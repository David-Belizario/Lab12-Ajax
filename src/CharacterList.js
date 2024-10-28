// src/CharacterList.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CharacterCard from './CharacterCard';
import './App.css';

function CharacterList({ characters }) {
    return (
        <Container>
            <Row>
                {characters.map((character, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center mb-4">
                        <CharacterCard character={character} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CharacterList;

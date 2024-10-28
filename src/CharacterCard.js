// src/CharacterCard.js

import React from 'react';
import { Card } from 'react-bootstrap';

function CharacterCard({ character }) {
    return (
        <Card style={{
            marginBottom: '20px',
            border: '1px solid #4B0082', // Color púrpura oscuro
            borderRadius: '10px',
            backgroundColor: '#333', // Fondo oscuro
            color: '#FFD700', // Texto amarillo
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden',
        }}>
            <Card.Body>
                <Card.Title style={{ fontSize: '1.5em', textAlign: 'center', fontWeight: 'bold' }}>
                    {character.name}
                </Card.Title>
                <Card.Text style={{ fontSize: '1.1em' }}>
                    <strong>Género:</strong> {character.gender}<br />
                    <strong>Año de nacimiento:</strong> {character.birth_year}<br />
                    <strong>Peso:</strong> {character.mass || 'Desconocido'}<br />
                    <strong>Altura:</strong> {character.height || 'Desconocido'}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CharacterCard;

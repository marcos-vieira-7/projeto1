import React from "react";
import Card from 'react-bootstrap/Card';

function Task({ nome, descricao }) {
    return (
        <Card style={{ width: '18rem', border: '1px solid purple', borderRadius: '2%' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{nome}</Card.Title>
                <Card.Text>
                    {descricao}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Task
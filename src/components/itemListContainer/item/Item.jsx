import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css'
import { Link } from 'react-router-dom';

function Item({ producto }) {
    const [showDescription, setShowDescription] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);

    const toggleContent = () => {
        setShowDescription(!showDescription);
        setShowFullImage(!showFullImage);
    };

    return (
        <Col xs={11} md={11} lg={12}>
            <Link to={`/item/${producto.id}`} className='card-libros'>
                <Card className='card-libros'>
                    <Card.Img
                        variant="top"
                        src={producto.urlImagen}
                        className={showFullImage ? "full-image" : "item-image"}
                    />
                    <Card.Body style={{ minHeight: '200px' }}>
                        <Card.Title style={{ marginBottom: '15px' }}>
                            {producto.nombreProducto}
                        </Card.Title>
                        <p className="text-muted" style={{ marginBottom: '0' }}>
                            Autor: {producto.autor}<br />
                            Categoría: {producto.categoria}
                        </p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>

    );
}

export default Item;

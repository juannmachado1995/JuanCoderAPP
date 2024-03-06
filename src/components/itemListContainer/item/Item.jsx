import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css'

function Item({ producto }) {
    const [showDescription, setShowDescription] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);

    const toggleContent = () => {
        setShowDescription(!showDescription);
        setShowFullImage(!showFullImage);
    };

    return (
        <Col xs={11} md={11} lg={12} className="mb-4"> 
            <Card className='card-libros'>
                <Card.Img 
                    variant="top" 
                    src={producto.urlImagen} 
                    className={showFullImage ? "full-image" : "item-image"} 
                    onClick={toggleContent} 
                />
                <Card.Body>
                    <Card.Title>{producto.nombreProducto}</Card.Title>
                    <Collapse in={!showDescription}>
                        <div>
                            <Card.Text>
                                {producto.descripcion.slice(0, 40)}
                            </Card.Text>
                        </div>
                    </Collapse>
                    <Collapse in={showDescription}>
                        <div>
                            <Card.Text>
                                {producto.descripcion}
                            </Card.Text>
                        </div>
                    </Collapse>
                    <Button 
                        variant="link" 
                        onClick={toggleContent} 
                        aria-controls="description-collapse"
                        aria-expanded={showDescription}
                    >
                        {showDescription ? "Leer menos" : "Leer más"}
                    </Button>
                    <p className="text-muted">Autor: {producto.autor} <br /> Categoría: {producto.categoria}</p> 
                    <Button variant="outline-primary" className="me-2 mb-2">
                        ${producto.precio}
                    </Button>
                    <Button variant="outline-success" className="mb-2">
                        Stock: {producto.stock}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;

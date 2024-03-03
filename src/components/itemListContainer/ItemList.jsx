import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'; 
import Item from './item/Item';

const ItemList = ({ productos }) => {
    return (
        <Row xs={1} md={3} lg={4} className="g-4 m-1" >
            {productos.map((producto) => (
                <Col key={producto.id}>
                    <Item producto={producto} />
                </Col>
            ))}
        </Row>
    );
}

export default ItemList;
